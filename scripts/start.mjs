import { createServer } from 'https';
import express from 'express';
import helmet from 'helmet';

const config = Object.freeze({
  ip: {
    address: process.env.IP_ADDRESS ?? '127.0.0.1'
  },
  tcp: {
    port: Number(process.env.TCP_PORT ?? '8443')
  },
  tls: {
    certificate: process.env.TLS_CERTIFICATE,
    key: process.env.TLS_KEY
  }
});

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.static('./'));

app.get('*', (request, response) => {
  response.sendFile('index.html', { root: process.cwd() });
});

const server = createServer({
  cert: config.tls.certificate,
  key: config.tls.key
}, app);

server.listen({
  host: config.ip.address,
  port: config.tcp.port
}, () => {
  console.log(`Listening on ${config.ip.address}:${config.tcp.port}…`);
});
