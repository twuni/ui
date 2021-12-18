import Status, { kindsOfStatus } from '../../Status/index.mjs';

import Card from '../../Card/index.mjs';
import Grid from '../../Grid/index.mjs';
import List from '@twuni/ui-list';
import Panel from '../../Panel/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Typography from '../../Typography/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

// eslint-disable-next-line
const TwinPeaksCast = [{"actor":"Kyle MacLachlan","character":"Special Agent Dale Cooper"},{"actor":"Michael Ontkean","character":"Sheriff Harry S. Truman"},{"actor":"Mädchen Amick","character":"Shelly Johnson"},{"actor":"Dana Ashbrook","character":"Bobby Briggs"},{"actor":"Richard Beymer","character":"Benjamin Horne"},{"actor":"Lara Flynn Boyle","character":"Donna Hayward"},{"actor":"Sherilyn Fenn","character":"Audrey Horne"},{"actor":"Warren Frost","character":"Dr. Will Hayward"},{"actor":"Peggy Lipton","character":"Norma Jennings"},{"actor":"James Marshall","character":"James Hurley"},{"actor":"Everett McGill","character":"Big Ed Hurley"},{"actor":"Jack Nance","character":"Pete Martell"},{"actor":"Joan Chen","character":"Jocelyn Packard"},{"actor":"Kimmy Robertson","character":"Lucy Moran"},{"actor":"Michael Horse","character":"Deputy Tommy 'Hawk' Hill"},{"actor":"Piper Laurie","character":"Catherine Martell"},{"actor":"Harry Goaz","character":"Deputy Andy Brennan"},{"actor":"Eric DaRe","character":"Leo Johnson"},{"actor":"Wendy Robie","character":"Nadine Hurley"},{"actor":"Ray Wise","character":"Leland Palmer"},{"actor":"Sheryl Lee","character":"Maddy Ferguson"},{"actor":"Russ Tamblyn","character":"Dr. Lawrence Jacoby"},{"actor":"Don S. Davis","character":"Maj. Garland Briggs"},{"actor":"Chris Mulkey","character":"Hank Jennings"},{"actor":"Gary Hershberger","character":"Mike Nelson"},{"actor":"Grace Zabriskie","character":"Sarah Palmer"},{"actor":"Catherine E. Coulson","character":"The Log Lady"},{"actor":"Ian Buchanan","character":"Dick Tremayne"},{"actor":"Mary Jo Deschanel","character":"Eileen Hayward"},{"actor":"Frank Silva","character":"Bob"},{"actor":"Kenneth Welsh","character":"Windom Earle"},{"actor":"Al Strobel","character":"Phillip Michael Gerard"},{"actor":"David Patrick Kelly","character":"Jerry Horne"},{"actor":"Miguel Ferrer","character":"FBI Agent Albert Rosenfield"},{"actor":"John Boylan","character":"Mayor Dwayne Milford"},{"actor":"Victoria Catlin","character":"Blackie O'Reilly"},{"actor":"Charlotte Stewart","character":"Betty Briggs"},{"actor":"Jill Engels","character":"Trudy"},{"actor":"David Lynch","character":"FBI Regional Bureau Chief Gordon Cole"},{"actor":"Heather Graham","character":"Annie Blackburn"},{"actor":"Robyn Lively","character":"Lana Budding Milford"},{"actor":"Dan O'Herlihy","character":"Andrew Packard"},{"actor":"Billy Zane","character":"John Justice Wheeler"},{"actor":"James Booth","character":"Ernie Niles"},{"actor":"Don Amendolia","character":"Emory Battis"},{"actor":"Annette McCarthy","character":"Evelyn Marsh"},{"actor":"Michael Parks","character":"Jean Renault"},{"actor":"Ron Blair","character":"Randy St. Croix"},{"actor":"Carel Struycken","character":"Giant"},{"actor":"Mak Takano","character":"Asian Man"},{"actor":"Lance Davis","character":"Chet (segment 'Invitation To Love')"},{"actor":"Phoebe Augustine","character":"Ronette Pulaski"},{"actor":"Lenny von Dohlen","character":"Harold Smith"},{"actor":"Brenda Strong","character":"Jones"},{"actor":"Robert Bauer","character":"Johnny Horne"},{"actor":"Hank Worden","character":"Waiter"},{"actor":"Michael J. Anderson","character":"Man From Another Place"},{"actor":"Jan D'Arcy","character":"Sylvia Horne"},{"actor":"Rick Giolito","character":"Montana (segment 'Invitation To Love')"},{"actor":"David Duchovny","character":"DEA Agent Dennis"},{"actor":"Walter Olkewicz","character":"Jacques Renault"},{"actor":"David L. Lander","character":"Tim Pinkle"},{"actor":"Jane Greer","character":"Vivian Smythe Niles"},{"actor":"David Warner","character":"Thomas Eckhardt"},{"actor":"Tony Jay","character":"Dougie Milford"},{"actor":"Nicholas Love","character":"Malcolm Sloan"},{"actor":"Galyn Görg","character":"Nancy"},{"actor":"Brian Straub","character":"Einar Thorson"},{"actor":"Erika Anderson","character":"Emerald (segment 'Invitation To Love')"},{"actor":"Brett Vadset","character":"Joey"},{"actor":"Peter Michael Goetz","character":"Jared (segment 'Invitation To Love')"},{"actor":"Royal Dano","character":"Judge Clinton Sternwood"},{"actor":"Clarence Williams III","character":"FBI Agent Roger Hardy"},{"actor":"Jed Mills","character":"Wilson Mooney"},{"actor":"Gavan O'Herlihy","character":"RCMP Officer Preston King"},{"actor":"Ritch Brinkley","character":"D.A. Daryl Lodwick"},{"actor":"Royce D. Applegate","character":"Rev. Clarence Brocklehurst"},{"actor":"Ron Kirk","character":"Cappy"},{"actor":"Claire Stansfield","character":"Sid"},{"actor":"Ron Taylor","character":"Coach Wingate"},{"actor":"Mary Stavin","character":"Heba"},{"actor":"John Apicella","character":"Jeffrey Marsh"},{"actor":"Ted Raimi","character":"Heavy Metal Youth"},{"actor":"Craig MacLachlan","character":"The Dead Man"},{"actor":"Jessica Wallenfels","character":"Harriet Hayward"},{"actor":"Joshua Harris","character":"Nicky"},{"actor":"Julee Cruise","character":"Girl Singer"},{"actor":"Andrea Hays","character":"Heidi"},{"actor":"Gérald L'Ecuyer","character":"Bartender"},{"actor":"Lisa Ann Cabasa","character":"Jenny"},{"actor":"Clay Wilcox","character":"Bernard Renault"},{"actor":"Brenda E. Mathers","character":"Caroline"},{"actor":"Laurel White","character":"Nurse Greta"},{"actor":"Ian Abercrombie","character":"Tom Brockman"},{"actor":"Tony Burton","character":"Colonel Riley"},{"actor":"Troy Evans","character":"George Wolchezk"},{"actor":"Kathleen Wilhoite","character":"Gwen Morton"},{"actor":"Rodney Harvey","character":"Biker Scotty"},{"actor":"Frances Bay","character":"Mrs. Tremond"},{"actor":"Mary Bond Davis","character":"Female Parole Board Member #1"},{"actor":"Bellina Logan","character":"Desk Clerk"},{"actor":"Van Dyke Parks","character":"Jack Racine"},{"actor":"Charles Hoyes","character":"Decker"},{"actor":"Mary Chalon","character":"Female Parole Board Member #2"},{"actor":"Willie Garson","character":"Heavy Metal Roadie"},{"actor":"Robert Davenport","character":"Johnny Horne"},{"actor":"Clive Rosengren","character":"Mr. Zipper"},{"actor":"Emily Fincher","character":"Louise Dombrowski"},{"actor":"James Craven","character":"Male Parole Board Officer"},{"actor":"Leonard Ray","character":"Lounge Local"},{"actor":"Matt Battaglia","character":"Cop"},{"actor":"Mark Lowenthal","character":"Walter Neff"},{"actor":"Adele Gilbert","character":"Midge Loomer"},{"actor":"Eve Brent","character":"Theodora Ridgely"},{"actor":"Austin Jack Lynch","character":"Little Boy"},{"actor":"Alan Ogle","character":"Janek Pulaski"},{"actor":"Jill Pierce","character":"Ice-Bucket Girl"},{"actor":"Mae Williams","character":"Mrs. Tremond"},{"actor":"Michelle Milantoni","character":"Suburbis Pulaski"},{"actor":"Jack McGee","character":"Bartender"},{"actor":"J. Marvin Campbell","character":"M. P. #1"},{"actor":"Don Calfa","character":"Vice Principal Greege"},{"actor":"Will Seltzer","character":"Mr. Brunston"},{"actor":"Jimmy Scott","character":"Singer"},{"actor":"John Charles Sheeham","character":"Bellman"},{"actor":"Michael M. Vendrell","character":"Outside Bodyguard"},{"actor":"Kim Lentz","character":"Bartender"},{"actor":"Julie Hayek","character":"Model"},{"actor":"Robert Apisa","character":"Bodyguard on Stairs"},{"actor":"Betsy Lynn George","character":"Teen Model"},{"actor":"Roberta Maguire","character":"Maria Pulaski"},{"actor":"Charlie Spradling","character":"Swabbie"},{"actor":"Lisa Cloud","character":"P. E. Teacher"},{"actor":"Stephen C. MacLaughlin","character":"Pie Eater"},{"actor":"Geraldine Keams","character":"Irene Littlehorse"},{"actor":"Charles Miller","character":"Doctor"},{"actor":"Tiffany Muxlow","character":"Cheerleader"},{"actor":"Molly Shannon","character":"Judy Swain"},{"actor":"Ed Wright","character":"Dell Mibbler"},{"actor":"Frank Roberts","character":"Father Hutchings"},{"actor":"Susan Sundholm","character":"Samantha"},{"actor":"David Wasman","character":"Gilman White"},{"actor":"Sandra Kaye Wetzel","character":"Nurse"},{"actor":"Jane Jones","character":"Margaret Honeycutt"},{"actor":"Alicia Witt","character":"Gersten Hayward"},{"actor":"Tawnya Pettiford-Wates","character":"Dr. Shelvy"},{"actor":"Shelley Henning","character":"Alice Brady"},{"actor":"Arvo Katajisto","character":"Security Guard"},{"actor":"Dorothy Roberts","character":"Mrs. Jackson"},{"actor":"Arnie Stenseth","character":"Sven Jorgenson"},{"actor":"Rick Tutor","character":"Janek Pulaski"},{"actor":"Marjorie Nelson","character":"Janice Hogan"},{"actor":"Ben DiGregorio","character":"Max Hartman"},{"actor":"Diane Caldwell","character":"Hotel Concierge Julie Duvic"},{"actor":"David Chadwick","character":"Harry Wilson"},{"actor":"David Chadwick","character":"Daniel Brenton"},{"actor":"Beverly Gordon","character":"Mrs. Brunston"},{"actor":"Kevin Young","character":"Toad"},{"actor":"Connie Woods","character":"New Girl at One Eyed Jacks"},{"actor":"Dave Bean","character":"Sheriff's Deputy"},{"actor":"Derick Shimatsu","character":"Asian Man"},{"actor":"Joey Altruda","character":"Road House Band Member"},{"actor":"Smokey Hormel","character":"Road House Band Member"},{"actor":"Steven Hodges","character":"Road House Band Member"},{"actor":"William Ungerman","character":"Road House Band Member"},{"actor":"Joseph 'Simon' Szeibert","character":"Road House Band Member"},{"actor":"Lesli Linka Glatter","character":"One-Eyed Jacks' Servant"},{"actor":"Mark Frost","character":"TV Newscaster"},{"actor":"Jennifer Aquino","character":"Eolani Jacoby"},{"actor":"Chris Morrissey","character":"Barfly"},{"actor":"Kellie Lumb","character":"USO Girl"},{"actor":"Jula Bell","character":"Girl at One Eyed Jacks with Vacuum Cleaner"},{"actor":"Eve Hands","character":"Woman Shopper"},{"actor":"Lorna MacMillan","character":"Miss Twin Peaks Contestant"},{"actor":"JC Motes","character":"Double R Diner Cook"},{"actor":"Steven A. Hite","character":"Patron"}];

const Cell = stylish('div', ({ theme }) => `
  padding: ${theme.spacing.md};
`);

const Item = stylish('a', [
  ({ theme }) => `
    align-items: stretch;
    background-color: rgba(0, 0, 0, 0);
    color: inherit;
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: row;
    text-decoration: none;
    ${theme.transition('background-color')}
  `,
  {
    rule: 'background-color: rgba(0, 0, 0, 0.05)',
    states: [':active', ':focus', ':hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.1)',
    states: [':active:focus', ':active:hover', ':focus:hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.15)',
    states: [':active:focus:hover']
  }
]);

export const HomeRoute = () => html`
  <${Typography} kind="h4">🌌 Twuni UI<//>
  <${Grid} columns=2 style="flex:1;overflow-x:hidden;overflow-y:auto;">
    <${Card}>
      <${Panel}
        content=${html`
          <ul>
            <li>🔥 Fast<//>
            <li>🎈 Lightweight<//>
            <li>🚲 Easy to use<//>
          <//>
        `}
        header=${html`<${Typography} kind="h5">Features<//>`}
      />
    <//>
    <${Card}>
      <${Panel}
        content=${html`
          <ul>
            ${kindsOfStatus.map((kind) => html`
              <li>
                <${Status} kind=${kind}/>
              <//>
            `)}
            <li>
              <${Status} color="#f39">Custom<//>
            <//>
          <//>
        `}
        header=${html`<${Typography} kind="h5">Status Badges<//>`}
      />
    <//>
    <${Card} style="align-items:stretch;overflow:hidden;display:flex;flex-direction:column;">
      <${Typography} kind="h5" title="Experimental">Virtualized Lists<//>
      <${Typography} kind="body" style="opacity:0.6">High-performance list views, right out of the box. Minimal and optimized.<//>
      <${List} count=${TwinPeaksCast.length} renderItem=${(index) => html`
        <${Item}>
          <${Cell}>${index}<//>
          <${Cell} style="flex:1">${TwinPeaksCast[index].actor}<//>
          <${Cell} style="flex:1">${TwinPeaksCast[index].character}<//>
        <//>
      `}/>
    <//>
  <//>
`;

export default HomeRoute;
