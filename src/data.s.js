import { SiPlatformio } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

export let gamesCharecter = [
  {
    id: 1,
    name: "Amoung Us",
    img: "./img/Games/Amoung-Us.png",
    rating: 7,
    width: "210px",
    color: "#89B7C2",
  },
  {
    id: 2,
    name: "Crossy Road",
    img: "./img/Games/Crossy_Road.PNG",
    color: "#FCCD86",
    rating: 6,
    width: "210px",
  },
  {
    id: 3,
    name: "Pokemon",
    img: "./img/Games/Pokemon.png",
    color: "#E37083",
    rating: 7,
    width: "210px",
  },
  {
    id: 4,
    name: "Tiffy",
    img: "./img/Games/CandyCrush.png",
    color: "#A8BF8A",
    rating: 9,
    width: "210px",
  },
  {
    id: 5,
    name: "Super Mario",
    img: "./img/Games/Super_Mario.png",
    color: "#5373EC",
    rating: 10,
    width: "180px",
  },
  {
    id: 6,
    name: "Sonic",
    img: "./img/Games/sonic--.png",
    color: "#E37083",
    rating: 8,
    width: "180px",
  },
  {
    id: 7,
    name: "Kirby",
    img: "./img/Games/kirby.png",
    color: "#12C9E0",
    rating: 6,
    width: "190px",
  },
  {
    id: 8,
    name: "Rayman",
    img: "./img/Games/rayman.png",
    color: "#e75724",
    rating: 8,
    width: "180px",
  },
  {
    id: 9,
    name: "Mickey Mouse",
    img: "./img/Games/mickeymouse-.png",
    color: "#3FD2CB",
    rating: 10,
    width: "210px",
  },
];

export let oldGames = [
  {
    id: 1,
    name: "Cut the Rope",
    bgimg: "../img/play/cut the rope.jpg",
    icon: "../img/play/Om Nom.png",
    img: [
      "./img/populargames/cuttherope2.png",
      "./img/populargames/cuttherope.png",
    ],
    desc: "Slove clever puzzles by cutting ropes to feed candy to the adorable monster, Om Nom",
    rate: 4.6,
    year: 2012,
    video: "./video/cut.mp4",
    company: " ZeptoLab ",
    Logo: "img/Company/ZeptoLab.png",
    fact: "Om Nom was originally a simple design, but adding cute eating animations and sounds made him the beloved icon of the game.",
    AppStore: "https://www.apple.com/us/search/cut-the-rope?src=globalnav",
    GooglePlay:
      "https://play.google.com/store/apps/details?id=com.zeptolab.ctr.ads&hl=en",
    Amazon: "https://www.amazon.com/cut-rope/s?k=cut+the+rope",
  },
  {
    id: 2,
    name: "Where is my Water?",
    bgimg: "../img/play/wmwbg.jpg",
    icon: "../img/play/wmwicon.png",
    img: [
      "./img/populargames/where is my water2.jpg",
      "./img/populargames/where is my water.png",
    ],
    desc: "Get ready to join Swampy, Allie, and Cranky on their NEXT exciting adventure!",
    rate: 4.5,
    year: 2011,
    video: "./img/play/whereis.mp4",
    company: ". Disney Mobile ",
    Logo: "img/Company/Disney_Mobile_logo.png",
    fact: "The where is my water team drew inspiration from real water flow and plumbing to make guiding water feel realistick!",
    AppStore: "https://apps.apple.com/us/app/wheres-my-water/id449735650",
    GooglePlay:
      "https://play.google.com/store/apps/details?id=com.disney.WMW&hl=en",
    Amazon: "https://www.amazon.com/Disney-Wheres-My-Water-Free/dp/B006OBWGHO",
  },
  {
    id: 3,
    name: "Angry birds",
    bgimg: "../img/play/angree birds.jpg",
    icon: "../img/play/angribirdicon.png",
    img: [
      "./img/populargames/angrybirds2.jpg",
      "./img/populargames/angrybirds.png",
    ],
    desc: "Launch angry birds to defeat the mischievous pigs and save the eggs!",
    rate: 4.5,
    year: 2009,
    video: "./video/angry.mp4",
    company: ". Rovio ",
    Logo: "img/Company/Rovio.jpg",
    fact: "The birds in Angry Birds were originally not angry , but adding their anger made the game a massive hit!",
    AppStore: "https://apps.apple.com/us/app/angry-birds-2/id880047117",
    GooglePlay:
      "https://play.google.com/store/apps/details?id=com.rovio.abcasual&hl=en",
    Amazon:
      "https://www.amazon.com/gp/product/B00CKOYVG8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=rovioente-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00CKOYVG8&linkId=2f63cad366ef8f66d8a70de1e2141dd1",
  },
  {
    id: 4,
    name: "Fruit Ninja",
    bgimg: "../img/play/fruitninjabg2.jpg",
    icon: "../img/play/fruitninjaicon.png",
    img: [
      "./img/populargames/fruitninja2.png",
      "./img/populargames/fruitninja.png",
    ],
    desc: "Slice fruits with speed and precision experiencing the thrill in every momnent.",
    rate: 3.9,
    year: 2010,
    video: "./video/ninja.mp4",
    company: ". Halfbrick Studios ",
    Logo: "img/Company/halfbrick.jpg",
    fact: "The idea of Fruit Ninja was inspired bye traditional Asian games where fruits were sliced with wooden swords.",
    AppStore: "https://apps.apple.com/us/app/fruit-ninja/id403858572",
    GooglePlay:
      "https://play.google.com/store/apps/details?id=com.halfbrick.fruitninjafree&hl=en",
    Amazon:
      "https://www.amazon.com/Halfbrick-Studios-Pty-Ltd-Fruit/dp/B005HSL626/ref=sr_1_2?dib=eyJ2IjoiMSJ9.c2Ftr1QAT-hYF2UDnmvudDU-hsRsUEcZYRBYlGqr3dZJjdJ-sfvE7HnEzbZPTa4_UGhSnMqmcI6xHMbx2nZGG0KjgmfOZrIZ198l70nGFyzkAxGa09ReA4o5ivGX38fwiJMnorRxy9rFUaLDZrY2ZQhxHqpNtY0vPCe3siqgMiBvZzFddUXPTmHvTtSE_-7k-bnjQYYiTvi5Dfe2CYN0OmkPftQErBPR3tatryl4Gnxrr6OAgGabdMS0O6TuQaElAd3Zl3xfD46A7uL3rDJbEsKiZvWGaQQVLI5mIb3yLek.r0JeHOQVEEzQpL3i83O0JDGPtGanJQMScWo_tBqkiIo&dib_tag=se&keywords=fruit+ninja+game&qid=1755517652&sr=8-2",
  },
  {
    id: 5,
    name: "Pack-Man",
    bgimg: "../img/play/pack-man.png",
    icon: "../img/play/packman2.png",
    img: ["./img/populargames/packman2.jpg", "./img/populargames/pack-man.png"],
    desc: "Guide Pack-Man through a maze, gobbling pellets and doodging colorful ghosts to rack up the highest score",
    rate: 4.6,
    year: 1980,
    video: "./img/play/pack-man.mp4",
    company: ". Namco ",
    Logo: "img/Company/namco.png",
    fact: "Pack-Man design was inspired by a pizza with one slice missing.",
    AppStore: "https://apps.apple.com/us/app/pac-man/id293778748",
    GooglePlay:
      "https://play.google.com/store/apps/details?id=eu.bandainamcoent.pacman256&hl=en",
    Amazon:
      "https://www.amazon.com/PAC-MAN-256-Endless-Arcade-Maze/dp/B012GOSOD2",
  },
  {
    id: 6,
    name: "Doodle Jump",
    bgimg: "./img/play/doodlejumpbg.jpg",
    icon: "../img/play/doodlejumpicon2.png",
    img: [
      "./img/populargames/doodlejump2.jpg",
      "./img/populargames/doodlejump.png",
    ],
    desc: "One of the hottest mobile games of all time! Easy to pick up and play. Wildly addictive.",
    rate: 4.6,
    year: 2009,
    video: "./img/play/Doodle Jump Trim.mp4",
    company: ". Lima Sky ",
    Logo: "img/Company/limasky.png",
    fact: "Doodle Jump sold an average of 25,000 copies per day in its early days.",
    AppStore:
      "https://apps.apple.com/us/app/doodle-jump-insanely-good/id456355158",
    GooglePlay:
      "https://play.google.com/store/apps/details?id=com.lima.doodlejump&hl=en",
    Amazon: "https://www.amazon.com/doodle-jump/s?k=doodle+jump",
  },
];
export let Games = [
  {
    id: 1,
    name: "Subway Surfers",
    rate: 4.7,
    rating: [{ 1: 30 }, { 2: 10 }, { 3: 40 }, { 4: 70 }, { 5: 80 }],
    genre: "Action . Runner . Arcade",
    video: "./video/subwaysurfer.mp4",
    img: "./img/ActionGames/SubwaySurferIcon.jpg",
    bgimg: "./img/ActionGames/Subway Surfer3.jpg",
    imgcard: [
      "../img/ActionGames/Subway Surfer2.jpg",
      "../img/ActionGames/Subway Surfer4.jpg",
      "../img/ActionGames/Subway Surfer5.jpg",
      "../img/ActionGames/Subway Surfer6.jpg",
    ],
    desc: "Help Jake, Tricky & Fresh escape from the grumpy Guard and his dog.",
    about:
      "Stickman Party is a collection of singleplayer / local multiplayer games, including games for one player, 2 player games, 3, or even as many as 4 players on the same device (smartphone of tablet). In stickman games, the rules are very simple. You can play without internet / Wi-Fi, because this game is for offline, local multiplayer, on one .These fun Stickman Party games for one, two players or more are perfect on the road, for parties, first dates, as well as for husband and wife, children and parents, brother and sister, for a group of friends.",
    commentsObj: {
      id: 1,
      name: "Reihaneh hosseini",
      date: "June 26, 2025",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos soluta, tempora iusto corporis sed quia velit itaque doloribus, illum dolorem ratione, blanditiis minus voluptas tempore. Voluptates natus voluptatem doloribus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore numquam consequatur expedita dolorum dolor modi maxime in provident magni eaque? Accusamus quia enim sequi, nostrum quos dolores laborum consectetur dolore.",
      helpfull: 10,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "May 24, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Sybo Games ApS",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "289",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 2,
    name: "Temple Run2",
    rate: 4.1,
    rating: [{ 1: 30 }, { 2: 10 }, { 3: 40 }, { 4: 70 }, { 5: 60 }],
    genre: "Action . Runner . Arcade",
    video: "./video/templerun.mp4",
    img: "./img/ActionGames/Temple Run.png",
    bgimg: "./img/ActionGames/temple runbg.jpg",
    imgcard: [
      "../img/ActionGames/Temple Run2.png",
      "../img/ActionGames/Temple Run3.png",
      "../img/ActionGames/Temple Run4.png",
    ],
    desc: "The Ultimate Endless Runner Adventure",
    about:
      "The Original Endless Running Adventure! Experience the thrill of Temple Run – the global phenomenon that redefined mobile gaming! Steal the cursed idol and escape from the relentless Demon Monkeys in a heart-pounding adventure through ancient temples, jungle ruins, and precarious cliff edges. Outrun danger in the ultimate maze-running, jungle-escaping, temple adventure! Swipe to turn, jump, and slide past deadly obstacles.",
    commentsObj: {
      id: 2,
      name: "Amin Khajoo",
      date: "Sep 10, 2024",
      comment:
        "wasting gems to make the 20shield challenge go away is a nuisance. pls get rid of it. Forgot how much I enjoyed this game. Now that I've got my gems/coins back, Im interested in unlocking some of these new maps, but am hesitant to do so without having seen all of it first. Any chance of a 'trial run' mode where each map has...3-5 free runs to try them out first? Also..uh.. Love all these new characters, but making them utilize the Naruto run looks absolutely ridiculou.",
      helpfull: 8,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "May 24, 2011",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Imangi Studios, LLC",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "231.8",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 3,
    name: "Suspects : Mystery mansion",
    rate: 4.4,
    rating: [{ 1: 30 }, { 2: 10 }, { 3: 10 }, { 4: 60 }, { 5: 70 }],
    genre: "Action . Strategy . MultiPlayer",
    video: "./video/suspect.mp4",
    img: "./img/ActionGames/suspect.jpg",
    bgimg: "./img/ActionGames/suspectbg2.png",
    imgcard: [
      "../img/ActionGames/suspect3.png",
      "../img/ActionGames/suspect5.png",
      "../img/ActionGames/suspect4.png",
    ],
    desc: "You have been invited to solve a murder mystery at the mansion!",
    about:
      "Play online with other 9 real players as you try to solve the mysterious murder. Perform investigative tasks to get closer to finding the killers’ identity. But be careful, this will be no easy task: the killers are among the group and will stop at nothing to “kill” the investigation!",
    commentsObj: {
      id: 3,
      name: "happy mappy",
      date: "Dec 23, 2024",
      comment:
        "I like the game but a glitch happens where I can't see other people and it makes the game hard to play. I tried everything but it doesn't work. (Edit. It's been almost a year and it still isn't fixed.) This new update hasn't fixed anything EDIT 2: it has been like 3 years and it is still not fixed. I still cannot see my, or anyones character. I am begging you to fix this. I love the game but not this issue.",
      helpfull: 12,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Apr 18, 2021",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Wildlife Studios",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "244.7",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 4,
    name: "Amoung Us",
    rate: 4.3,
    rating: [{ 1: 10 }, { 2: 20 }, { 3: 40 }, { 4: 50 }, { 5: 65 }],
    genre: "Action . Strategy . MultiPlayer",
    video: "./video/amoungus.mp4",
    img: "./img/ActionGames/amoung4.jpg",
    bgimg: "./img/ActionGames/Amoung us.png",
    imgcard: [
      "../img/ActionGames/amoungus2.jpg",
      "../img/ActionGames/amoungus33.jpg",
      "../img/ActionGames/amoungus3.png",
    ],
    desc: "Fix the ship, throw your friends into space. All in a day work",
    about:
      "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!Crewmates can win by completing all tasks or discovering and voting the impostor off the ship. The Impostor can use sabotage to cause chaos, making for easier kills and better alibis.",
    commentsObj: {
      id: 4,
      name: "Jooki Jan",
      date: "Dec 17, 2024",
      comment:
        "This game is great, and I quit when the quick chat was added and returned when it was removed. Roles made it more interesting. There aren't many in game purchases or ads at all, and it's free to play, which makes it one of the best games in my opinion. It's still the same nostalgic game from 2020, only now it has more weird players with a mix of the new generation and the problems going on in real life ( racism, sexists, and predators ). Do be warned.",
      helpfull: 9,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Jun 15, 2018",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "InnerSloth LLC",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "910",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 5,
    name: "Level Devil",
    rate: 4.7,
    rating: [{ 1: 25 }, { 2: 30 }, { 3: 63 }, { 4: 70 }, { 5: 85 }],
    genre: "Action . Platformer . Abstract",
    video: "./video/leveldevil.mp4",
    img: "./img/ActionGames/leveldevil2.png",
    bgimg: "./img/ActionGames/leveldevil.png",
    imgcard: [
      "../img/ActionGames/leveldevil4.jpg",
      "../img/ActionGames/leveldevil5.png",
      "../img/ActionGames/leveldevil6.png",
    ],
    desc: "Trust nothing. Hate everything. Welcome to Level Devil",
    about:
      "A nice, pleasant game with no surprises. , 200 levels that make you happy , Local 2-player mode to share the love , Beautifully rendered graphics that will make your heart sing",
    commentsObj: {
      id: 5,
      name: "mr Darki",
      date: "Nov 2, 2024",
      comment:
        "The game is interesting and fun, but the main reason I dieisnt because the levels are tricky... Which some are very tricky.. But the fact that the controls kinda suck. Like when you run and then you stop and the charector doesnt immediately stop, or the jump always seems too short or long. For a person with bigger fingers the tiny controls are bad, you die mostly cause of either fat fingers or un-/ too- responsive controls.",
      helpfull: 2,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Apr 15, 2025",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Unept",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "85",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 6,
    name: "Hill Climb Racing",
    rate: 4.4,
    rating: [{ 1: 12 }, { 2: 55 }, { 3: 63 }, { 4: 69 }, { 5: 74 }],
    genre: "Action . Racing . Casual",
    video: "./video/hill.mp4",
    img: "./img/ActionGames/hcr2.png",
    bgimg: "./img/ActionGames/hcrbg.jpg",
    imgcard: [
      "../img/ActionGames/hcr.jpg",
      "../img/ActionGames/hcr3.jpg",
      "../img/ActionGames/hcr4.png",
    ],
    desc: "Race uphill in crazy vehicles, collect coins, and defy gravity in this fun physics-based driving game!",
    about:
      "Play the original classic Hill Climb Racing! Race your way uphill in this physics based driving game, playable offline! Meet Bill, the young aspiring uphill racer. He is about to embark on a journey through Climb Canyon that takes him to where no ride has ever been before. With little respect to the laws of physics, Bill will not rest until he has conquered the highest hills up on the moon! Face challenges in unique hill climbing environments with a wide variety of cars to choose from. Earn points from daring tricks and ",
    commentsObj: {
      id: 6,
      name: "Ghazal Khosravi",
      date: "July 12, 2024",
      comment:
        "no doubt, the game is really good but the thing I don't like in this game is that like when you are about to win daily challenge or daily event sometimes the brake don't work or the gas will stop working or automatically it will fall and game is over and you were about to win it . the second thing is that in any landscape I drove till 4000m and my next goal in to reach 4200m but I still have to start again with 0m like why, I reached 4000m, give me from somthing around it . it's really very bad",
      helpfull: 16,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Jun 25, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Fingersoft",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "165.4",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 7,
    name: "Banana Kong",
    rate: 4.3,
    rating: [{ 1: 22 }, { 2: 55 }, { 3: 63 }, { 4: 69 }, { 5: 79 }],
    genre: "Action . Runner . Arcade",
    video: "./video/kong.mp4",
    img: "./img/ActionGames/bananakong3.jpg",
    bgimg: "./img/ActionGames/banana kong.png",
    imgcard: [
      "../img/ActionGames/banana kong2.png",
      "../img/ActionGames/banana kong4.png",
      "../img/ActionGames/banana kong5.png",
    ],
    desc: "Run, jump, bounce and swing on vines while traversing *new* forests, caves, treetops, lagoons and even the north pole!",
    about:
      "A thrilling ride through jungle, caves and treetops. Play as Kong! Banana Kong! Run, jump, bounce and swing on vines as you help Banana Kong to outrun a huge banana avalanche! Keep full control with highly responsive single-finger tap and swipe controls.",
    commentsObj: {
      id: 7,
      name: "Parva Pour",
      date: "Feb 3, 2024",
      comment:
        "Awesome app; the animations are so smooth and the game hardly ever has ads. I love the cute little outfits and hats you can give your monkey and it makes the game even more fun. But I don't know if it's just my phone or not because recently when I open the game, I'd play for 5 seconds and the screen would turn black; then the app would crash. I really do like the game, so if it isn't just my phone, I hope you could please fix these crashes so I can go back to playing it normally. Thanks!",
      helpfull: 13,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "May 7, 2013",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "FDG Entertainment",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "276.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 8,
    name: "Kingdom Rush",
    rate: 4.5,
    rating: [{ 1: 32 }, { 2: 41 }, { 3: 63 }, { 4: 79 }, { 5: 73 }],
    genre: "Action . Strategy . Casual . Army",
    video: "./video/kingdom.mp4",
    img: "./img/ActionGames/kingdom rush.jpg",
    bgimg: "./img/ActionGames/kingdom rush2.jpg",
    imgcard: [
      "../img/ActionGames/kingdom rush3.jpg",
      "../img/ActionGames/kingdom rush4.png",
      "../img/ActionGames/kingdom rush5.png",
    ],
    desc: "Defend your kingdom in this epic tower defense game full of strategy and action!",
    about:
      "Here, you will play as a brave caveman facing challenges from monsters coming from all directions. This game combines elements of strategy, tower defense, and mowing, immersing you in an exciting battle.Defeat monsters to earn meat, which you can use to upgrade your character's attributes and become more powerful. Continuously improve your attributes to become the top caveman in the wilderness!",
    commentsObj: {
      id: 8,
      name: "jim hoss",
      date: "Sep 11, 2024",
      comment:
        "1 round takes a lot of time. If you could add a particular feature (split screen) so that I could use other apps or do other things while running the game. it would be much cooler! I change it to 5* once thats available. (Hopefully)",
      helpfull: 2,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Oct 9, 2011",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Ironhide S.A.",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "147.6",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 9,
    name: "Gumslinger",
    rate: 4.4,
    rating: [{ 1: 20 }, { 2: 37 }, { 3: 44 }, { 4: 59 }, { 5: 77 }],
    genre: "Action . Shooter . Casual",
    video: "./video/gum.mp4",
    img: "./img/ActionGames/gumslinger2.jpg",
    bgimg: "./img/ActionGames/gumslingerbg.png",
    imgcard: [
      "../img/ActionGames/gumslinger.jpg",
      "../img/ActionGames/gumslinger3.png",
      "../img/ActionGames/gumslinger4.png",
    ],
    desc: "A gummy candy world of intense shootouts, amazing skillshots and crazy fun gunplay missions. ",
    about:
      "Welcome to Gumslinger! A gummy candy world of intense shootouts, amazing skillshots and crazy fun gunplay missions. Duel Gumslingers around the world in PvPb tournaments, 64 players but only one winner. A wide variation of skillshot missions.",
    commentsObj: {
      id: 9,
      name: "shekoofeh hosseini",
      date: "july 12, 2024",
      comment:
        "I absolutely love this game. Awesome graphics and game play. I've read some people have an issue with the physics, I don't. It teaches you to figure out the unexpected. Only one compliant. The KO Gun has to go. It's slow and clumsy. How about a Stun Gun that paralyzes the Gumslinger to death. Or a Light Saber that slashes through the Gumslinger cutting them in half.",
      helpfull: 4,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "March 9, 2022",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Itatake.com",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "322.2",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 10,
    name: "Candy Crush Saga",
    rate: 4.7,
    rating: [{ 1: 55 }, { 2: 60 }, { 3: 70 }, { 4: 80 }, { 5: 40 }],
    genre: "Puzzle . Casual . Food",
    video: "./video/candy.mp4",
    img: "./img/ActionGames/candyicon.png",
    bgimg: "./img/ActionGames/canducrushbg.jpg",
    imgcard: [
      "../img/ActionGames/candycrush1.jpg",
      "../img/ActionGames/candycrush2.jpg",
      "../img/ActionGames/candycrush3.jpg",
    ],
    desc: "Candu Crush is a match-three puzzle game where you align candies of the same color to clear them and score points ",
    about:
      "Master the legendary match 3 puzzle game from King and have a blast! With over a trillion matching levels played, Candy Crush Saga is the popular match 3 puzzle game! Match, pop, and blast candies in this tasty puzzle adventure to progress to the next level and get a sugar blast! Master match 3 puzzles with quick thinking and smart matching moves to be rewarded with sugar bonuses and tasty candy combos.",
    commentsObj: {
      id: 10,
      name: "Banafshe Hosseini",
      date: "Fab 2, 2024",
      comment:
        "The gameplay is phenomenal, but there's a seriously infuriating glitch (or maybe it's a feature. If it is, it's horrible.) that makes it feel pointless to play. If I tab out of the app while in the middle of a match for a bit too long, it counts as a loss, even if I've already won and simply haven't finished the winning cutscene. It prevents me from getting gold, forces me to lose a life, and makes me restart the level. I can't stand it.",
      helpfull: 12,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "April 9, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "King",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "398",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 11,
    name: "Tetris",
    rate: 4.5,
    rating: [{ 1: 49 }, { 2: 50 }, { 3: 51 }, { 4: 68 }, { 5: 80 }],
    genre: "Puzzle . Casual . Block",
    video: "./video/tetris.mp4",
    img: "./img/ActionGames/tetrisicon.png",
    bgimg: "./img/ActionGames/canducrushbg.jpg",
    imgcard: [
      "../img/ActionGames/candycrush1.jpg",
      "../img/ActionGames/candycrush2.jpg",
      "../img/ActionGames/candycrush3.jpg",
    ],
    desc: "Candu Crush is a match-three puzzle game where you align candies of the same color to clear them and score points ",
    about:
      "Master the legendary match 3 puzzle game from King and have a blast! With over a trillion matching levels played, Candy Crush Saga is the popular match 3 puzzle game! Match, pop, and blast candies in this tasty puzzle adventure to progress to the next level and get a sugar blast! Master match 3 puzzles with quick thinking and smart matching moves to be rewarded with sugar bonuses and tasty candy combos.",
    commentsObj: {
      id: 11,
      name: "Banafshe Hosseini",
      date: "Fab 2, 2024",
      comment:
        "The gameplay is phenomenal, but there's a seriously infuriating glitch (or maybe it's a feature. If it is, it's horrible.) that makes it feel pointless to play. If I tab out of the app while in the middle of a match for a bit too long, it counts as a loss, even if I've already won and simply haven't finished the winning cutscene. It prevents me from getting gold, forces me to lose a life, and makes me restart the level. I can't stand it.",
      helpfull: 12,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "April 9, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "King",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "398",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 12,
    name: "Monument Valley",
    rate: 5.0,
    rating: [{ 1: 0 }, { 2: 0 }, { 3: 0 }, { 4: 10 }, { 5: 74 }],
    genre: "Puzzle . Casual . Logic",
    video: "./video/valley.mp4",
    img: "./img/ActionGames/Monument_Valley_icon.jpg",
    bgimg: "./img/ActionGames/Monumentvalleybg.png",
    imgcard: [
      "../img/ActionGames/Monumentvalley.png",
      "../img/ActionGames/Monumentvalley2.png",
      "../img/ActionGames/Monumentvalley3.png",
    ],
    desc: "Monument valley is a puzzle game of optical illusions and impossible paths ",
    about:
      "In Monument Valley you will manipulate impossible architecture and guide a silent princess through a stunningly beautiful world.Monument Valley is a surreal exploration through fantastical architecture and impossible geometry. Guide the silent princess Ida through mysterious monuments, uncovering hidden paths, unfolding optical illusions and outsmarting the enigmatic Crow People.Ida's Dream now available.",
    commentsObj: {
      id: 12,
      name: "Bahareh Hosseini",
      date: "Agu 7, 2024",
      comment:
        "Not only is this game beautiful, but the quality of the puzzles is wonderful. Playing with perspectives, interacting with elements, and seeing how everything changes makes it interesting and enjoyable. I finished it in a day, and I'm left wanting more. (Purchasing the additional levels is worth it, plus you'll be supporting the creators of such a magnificent game ✨✨)",
      helpfull: 25,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "April 1, 2014",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "ustwo games",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "337.6",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 13,
    name: "Cut the Rope",
    rate: 4.6,
    rating: [{ 1: 61 }, { 2: 61 }, { 3: 22 }, { 4: 71 }, { 5: 80 }],
    genre: "Puzzle . Casual . Logic",
    video: "./video/cut.mp4",
    img: "./img/ActionGames/cuticon.png",
    bgimg: "./img/ActionGames/cutbg.jpg",
    imgcard: [
      "../img/ActionGames/cut1.jpg",
      "../img/ActionGames/cut2.jpg",
      "../img/ActionGames/cut3.jpg",
    ],
    desc: "cut the Rope is a physics-based puzzle game where you cut ropes to feed candy to a cute monster",
    about:
      "Embark on an Exciting Journey with Cut the Rope! Join Om Nom in the legendary ,Cut the Rope logic puzzles series. Play for free alongside millions of players worldwide!",
    commentsObj: {
      id: 13,
      name: "Parsa Pour",
      date: "july 27, 2024",
      comment:
        "I remember this game being so enjoyable back during its early release. Free to play is unbearable. I don't mind watching ads but it is impossible to play a difficult level with them. I guess this is now the model. Oh well. I give it 2 stars because the mechanics of the game are amazing but F2P which is my tier is a no go.",
      helpfull: 19,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 10, 2014",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "ZeptoLab UK Limited",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "345.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 14,
    name: "Angry Birds",
    rate: 4.3,
    rating: [{ 1: 62 }, { 2: 11 }, { 3: 28 }, { 4: 43 }, { 5: 70 }],
    genre: "Puzzle . Animals . Physics",
    video: "./video/angry.mp4",
    img: "./img/ActionGames/angrybirdicon.png",
    bgimg: "./img/ActionGames/angrybirdbg.jpg",
    imgcard: [
      "../img/ActionGames/angrybird1.png",
      "../img/ActionGames/angrybird2.png",
      "../img/ActionGames/angrybird3.png",
    ],
    desc: "Angry Birds is a slingshot game where you launch birds to destroy pigs structures",
    about:
      "Join hundreds of millions of players for FREE and start the fun slingshot adventure now! Team up with your friends, climb the leaderboards, gather in clans, collect hats, take on challenges, and play fun events in all-new game modes. Evolve your team and show your skills in this exciting Angry Birds game !Get to know all of the iconic Angry Birds characters and experience the fun gameplay that has captured the hearts of millions of players.",
    commentsObj: {
      id: 14,
      name: "Sahand Aziz",
      date: "May 3, 2024",
      comment:
        "The core gameplay is AAA quality and extremely fun, but the experience is buried under frustrating design choices. For F2P players, the endless ads and aggressive purchase pop-ups nearly ruin the game. The excessive energy system feels archaic, and the menus are incredibly cluttered with too many upgrade paths. It's a shame to see such fantastic core mechanics bogged down by so much bloat outside of the actual levels.",
      helpfull: 19,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 1, 2009",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Rovio Entertainment",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "545.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 15,
    name: "The Room",
    rate: 4.7,
    rating: [{ 1: 40 }, { 2: 75 }, { 3: 79 }, { 4: 80 }, { 5: 80 }],
    genre: "Puzzle . Advanture . Casual",
    video: "./video/room.mp4",
    img: "./img/ActionGames/roomicon.png",
    bgimg: "./img/ActionGames/roombg.jpg",
    imgcard: [
      "../img/ActionGames/room1.png",
      "../img/ActionGames/room2.png",
      "../img/ActionGames/room3.png",
    ],
    desc: "The Room is a puzzle game where you slove intricate 3D mysteries inside detailed boxes",
    about:
      "Welcome to The Room, a physical puzzler, wrapped in a mystery game, inside a beautifully tactile 3D world. Excellently produced, clever puzzles and spine-tingling music",
    commentsObj: {
      id: 15,
      name: "Alborz Aziz",
      date: "Nov 13, 2024",
      comment:
        "The room is incredibly addictive - every puzzle feels like opening a real mystery box!",
      helpfull: 19,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 1, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Fireproof Studios",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "399.3",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 16,
    name: "Human: Fall Flat",
    rate: 4.2,
    rating: [{ 1: 0 }, { 2: 60 }, { 3: 61 }, { 4: 70 }, { 5: 90 }],
    genre: "Puzzle . Platformer . Offline",
    video: "./video/human.mp4",
    img: "./img/ActionGames/humanicon.png",
    bgimg: "./img/ActionGames/humanbg.jpg",
    imgcard: [
      "../img/ActionGames/human1.png",
      "../img/ActionGames/human2.png",
      "../img/ActionGames/human3.png",
    ],
    desc: "Human: Fall Flat is a physics-based puzzle game where wobbly charecters solve challenges through hilarious movement",
    about:
      "Human Fall Flat is a hilarious, light-hearted physics platformer set in floating dreamscapes that can be played solo or with up to 4 players. Free new levels keep its vibrant community rewarded. Each dream level provides a new environment to navigate, from mansions, castles and Aztec adventures to snowy mountains, eerie nightscapes and industrial locations. Multiple routes through each level, and perfectly playful puzzles ensure exploration and ingenuity are rewarded. ",
    commentsObj: {
      id: 16,
      name: "Nila Khajoo",
      date: "Dec 29, 2024",
      comment:
        "Hilarious and challenging! the clumsy controls make it even more fun with friends",
      helpfull: 25,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 1, 2016",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Supported",
      },
      {
        title: "Size",
        icon: "GB",
        desc: "1.3",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 17,
    name: "Escape Time Fun ",
    rate: 4.2,
    rating: [{ 1: 0 }, { 2: 60 }, { 3: 61 }, { 4: 70 }, { 5: 90 }],
    genre: "Puzzle . Escape . Mystery",
    video: "./video/escape.mp4",
    img: "./img/ActionGames/mysteryicon.png",
    bgimg: "./img/ActionGames/mysterybg.jpg",
    imgcard: [
      "../img/ActionGames/mystery1.jpg",
      "../img/ActionGames/mystery2.jpg",
      "../img/ActionGames/mystery3.jpg",
    ],
    desc: "Escape Time Fun Brain Games is a puzzle escape game where you slove tricky challenges to break out of rooms",
    about:
      "Step into a world of mind-bending puzzles and thrilling adventures by the name of Escape Time: Fun Logic Puzzles! In this exciting escape room game, you'll embark on a time-travelling journey alongside a goofy professor and his clumsy cat as they desperately try to find their way back home using their trusty time machine. This update introduces a brand-new time-travelling storyline, where you'll explore ancient Egypt and the wild west, each with their unique challenges and mysteries to unravel.",
    commentsObj: {
      id: 17,
      name: "Pegah Azadi",
      date: "Aug 6, 2024",
      comment:
        "Cute but glitchy. Traveling scenes and side games never work. Traveling scenes freeze or close the app. Jewel side game works for first level, then stops working and only let's me close it. One level of main game didn't work for both me and my mom, who also plays this game. Ads take longer than most levels. Sometimes levels are so easy I feel like they're just stringing me along so I'll watch more ads. Would give 5 stars if it wasn't glitchy and either ads were shorter or levels were longer.",
      helpfull: 10,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 1, 2016",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Unico Studio",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "261.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+4",
      },
    ],
  },
  {
    id: 18,
    name: "Match Masters",
    rate: 4.8,
    rating: [{ 1: 0 }, { 2: 90 }, { 3: 70 }, { 4: 80 }, { 5: 80 }],
    genre: "Puzzle . Casual . Cartoon",
    video: "./video/match.mp4",
    img: "./img/ActionGames/matchicon.png",
    bgimg: "./img/ActionGames/matchbg.png",
    imgcard: [
      "../img/ActionGames/match1.png",
      "../img/ActionGames/match2.png",
      "../img/ActionGames/match3.png",
    ],
    desc: "Match 3 Puzzle games - reinvented! Now with online PvP multiplayer!",
    about:
      "Play LIVE with friends OR against opponents from all over the world in a fun online PvP match 3 competition! Match Masters is free and has tons of new exciting ways to play matching games!",
    commentsObj: {
      id: 18,
      name: "Shaghayegh Azadi",
      date: "Feb 28, 2024",
      comment:
        "I really enjoy this game but it seems like the opponent's time goes so much slower than mine even though we have the equal amount of trophies and sometimes they are even ranked higher than me so I started using my screen recorder to record the games and it turns out I'm right, in about 3 in every 5 games, my time goes much faster than my opponents, leaving them more time for each round. And not only that, my time gets cut short by 4 seconds. Aim higher Match Masters! Stand out by being fair!",
      helpfull: 9,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 1, 2020",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Candivore",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "261.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 19,
    name: "Tennis Clash",
    rate: 4.5,
    rating: [{ 1: 0 }, { 2: 90 }, { 3: 80 }, { 4: 80 }, { 5: 70 }],
    genre: "Sport . Casual . Tennis",
    video: "./video/tennis.mp4",
    img: "./img/ActionGames/tennisicon.jpg",
    bgimg: "./img/ActionGames/tennis-clashbg.jpg",
    imgcard: [
      "../img/ActionGames/tennis1.jpg",
      "../img/ActionGames/tennis2.jpg",
      "../img/ActionGames/tennis3.jpg",
    ],
    desc: "🎾 Welcome to Tennis Clash: The Ultimate Online Multiplayer Tennis Game 🎾",
    about:
      "Get ready to experience the thrill of the court like never before with Tennis Clash, the ultimate multiplayer online tennis game that's taking the sports gaming world by storm! Dive into the action with breathtaking graphics, realistic gameplay, and fierce competition – all from the palm of your hand. It's time to show off your racket skills and become the ultimate tennis champion!",
    commentsObj: {
      id: 19,
      name: "Shaghayegh Azadi",
      date: "Feb 1, 2024",
      comment:
        "Love this game. 4 stars because... Not sure if there are bugs in it or if it's actually made so you can't win all games. There are games when you can actually see the ball stop after hitting it and this allows your opponent to get to the ball, if this is the case then the opponent has to be a bot. Other times you hit the ball & it should go one way but goes the other. UPDATE. THE ANGLES WHEN PLAYING ARE NOW TERRIBLE. SOME SHOTS ITS LIKE PLAYING IN THE CROWD & CANT SEE THE BALL LAND FROM OPPONENT",
      helpfull: 11,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 1, 2019",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Wildlife Studios",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "309",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 20,
    name: "Soccer Superstar",
    rate: 4.6,
    rating: [{ 1: 10 }, { 2: 70 }, { 3: 70 }, { 4: 79 }, { 5: 80 }],
    genre: "Sport . Casual . Soccer",
    video: "./video/soccer.mp4",
    img: "./img/ActionGames/soccericon.png",
    bgimg: "./img/ActionGames/soccerbg.png",
    imgcard: [
      "../img/ActionGames/soccer1.png",
      "../img/ActionGames/soccer2.png",
      "../img/ActionGames/soccer3.png",
    ],
    desc: "Soccer SuperStar is a mobile football game where you swipe to pass, shoot, and score goals",
    about:
      "Play the brand new football game Soccer Super Star and enjoy real run-time and kick physics for an immersive and legendary football experience! Love action arcade soccer but lack the time to practice? The new Soccer Super Star’s very easy to learn game controls allows you to jump-start the fun. Just flick your finger across the screen to kick the ball and score a goal! ",
    commentsObj: {
      id: 20,
      name: "Hossein Badie",
      date: "Nov 1, 2024",
      comment:
        "This game is just not for me. It is a bad game due to the reasons from the review I wrote about Score Hero ( ads, starting over when the ball is lost, insane goalie, etc. ). Also the fact that it has no end is pretty unrealistic and uncomfortable for players. The reason why I'm not deleting it is because I don't want to reset my progress, otherwise I would delete it. Plus they make wrong decisions. For eg. they make you pass when you are supposed to shoot.",
      helpfull: 13,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 17, 2018",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Real Freestyle Soccer",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "322.6",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 21,
    name: "8 Ball Pool",
    rate: 4.7,
    rating: [{ 1: 10 }, { 2: 60 }, { 3: 73 }, { 4: 80 }, { 5: 75 }],
    genre: "Sport . Casual . Soccer",
    video: "./video/pool.mp4",
    img: "./img/ActionGames/ballpoolicon.png",
    bgimg: "./img/ActionGames/ballpoolbg.jpg",
    imgcard: [
      "../img/ActionGames/ballpool1.png",
      "../img/ActionGames/ballpool2.png",
      "../img/ActionGames/ballpool3.png",
    ],
    desc: "8 Ball Pool is an addictive challenging game based on real 3D pool games, where you will challenge your friends online. Become a master of the pool!",
    about:
      "The balls game is easy to win. You just have to select the table and get ready. Join us and challenge your friends to this ball game in PvP mode. Use your pool strategy with the cue wisely in this online multiplayer ball game as every round will be more difficult after each level. You can play in multiplayer or PvP mode in different pool tables. Become the best player and challenge your friends in this ",
    commentsObj: {
      id: 21,
      name: "Sepide Moh",
      date: "Agu 11, 2024",
      comment:
        "Fun, but cheaters ruin it. I'm level 26 but get paired up with level 170+ players quite often. These players are hitting 2 and 3 rail shots that are near impossible. Their aiming seem to snap into place and put the perfect spin on the ball without adjusting their draw. It's disappointing because I used to really love this game. Won't be spending any money on this game for this reason.",
      helpfull: 537,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 17, 2018",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Miniclip",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "322.6",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+14",
      },
    ],
  },
  {
    id: 22,
    name: "Vector",
    rate: 4.3,
    rating: [{ 1: 10 }, { 2: 60 }, { 3: 73 }, { 4: 80 }, { 5: 75 }],
    genre: "Sport . Casual . Prkour",
    video: "./video/vector.mp4",
    img: "./img/ActionGames/vectoricon.png",
    bgimg: "./img/ActionGames/vectorbg.png",
    imgcard: [
      "../img/ActionGames/vector1.png",
      "../img/ActionGames/vector2.png",
      "../img/ActionGames/vector3.png",
    ],
    desc: "Vector is a parkour-style action game where you run, jump and climb to escape pursuit",
    about:
      "In the gloomy world of the distant future, the freedom and will of man is suppressed by the all-powerful Big Brother – a totalitarian regime that watches your every move. But you're not going to be a submissive slave of the system, are you? Time to run! Vector is a parkour-themed runner from the creators of the legendary Shadow Fight series, and it's back in a remastered version! Become a real urban ninja, hide from your pursuers, and break free... now with updated style!",
    commentsObj: {
      id: 22,
      name: "Hossein Zargar",
      date: "March 22, 2024",
      comment:
        "Friendly advice. Load whatever you need to with an internet connection, then turn it off. Cause there are ads everywhere. When you finish a level, an ad plays. Most people may be familiar with that. But even when you choose to replay a level, an ad plays. Not the type of ad you can skip - a full 20 to 30 secs ad, essentially pulling you out of the game. It can be fun, but the ads are so frustrating, so it only gets two stars from me. Any other Nekki game would be a better experience.",
      helpfull: 236,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 17, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "NEKKI",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "273.2",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 23,
    name: "BASEBALL 9",
    rate: 4.5,
    rating: [{ 1: 10 }, { 2: 60 }, { 3: 73 }, { 4: 80 }, { 5: 75 }],
    genre: "Sport . Casual . Baseball",
    video: "./video/baseball.mp4",
    img: "./img/ActionGames/baseballicon.png",
    bgimg: "./img/ActionGames/baseballbg.jpg",
    imgcard: [
      "../img/ActionGames/baseball1.png",
      "../img/ActionGames/baseball2.png",
      "../img/ActionGames/baseball3.png",
    ],
    desc: "Play BASEBALL NINE to become the Legend League Champion!",
    about:
      "Enjoy fast-paced, realistic baseball game, featuring compact gameplay and informative stats.★ Game Feature : Lean and fast gameplay!",
    commentsObj: {
      id: 23,
      name: "Jared Miller",
      date: "July 3, 2025",
      comment:
        "Really enjoying the game. Any chance they can make a raccoon mascot? The gameplay reminds me a little bit mind of the old game Baseball for the Nintendo Gameboy except the fielding is much more automated. The game truly is free to play and has no ads, though the developers are more than happy sell you upgrades and customizations but they don't force them on you. Overall, an enjoyable and well-executed mobile game.",
      helpfull: 175,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "Sep 17, 2022",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "playus soft",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "300.1",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 24,
    name: "Pooking - Billiards City",
    rate: 4.5,
    rating: [{ 1: 10 }, { 2: 60 }, { 3: 73 }, { 4: 80 }, { 5: 75 }],
    genre: "Sport . Casual . Billiard",
    video: "./video/pooking.mp4",
    img: "./img/ActionGames/billiardicon.png",
    bgimg: "./img/ActionGames/billiardbg.jpg",
    imgcard: [
      "../img/ActionGames/billiard1.jpg",
      "../img/ActionGames/billiard2.jpg",
      "../img/ActionGames/billiard3.png",
    ],
    desc: "Billiards City is a modern arcade style pool game with single player, If you love a relaxed game of 8 ball, this is the game for you!",
    about:
      "Relaxed Game of 8 Ball . With Billiards City, gameplay is king! Billiards City uses the latest technology to create the most exciting and realistic billiards simulator. Experience pool like never before, thanks to the stunning HD graphics, fantastic playability and ultra realistic ball physics.",
    commentsObj: {
      id: 24,
      name: "David Winter",
      date: "July 25, 2025",
      comment:
        "I really do like this game. But the long ads after every single frame which cannot be easily and swiftly closed requiring multiple taps to close them has become intolerable. And balls often hug the cushions regardless of how they are hit. More time is spent watching ads than playing. If I could pay to remove ads I would but I can't. An excellent game ruined by incessant ads. Also the amount of memory the game occupies increases dramatically as you play. Uninstalling.",
      helpfull: 1122,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 7, 2022",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "MOUNTAIN GAME",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "401.1",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+9",
      },
    ],
  },
  {
    id: 25,
    name: "Volleyball Arena",
    rate: 4.5,
    rating: [{ 1: 10 }, { 2: 60 }, { 3: 73 }, { 4: 80 }, { 5: 75 }],
    genre: "Sport . Casual . Volleyball",
    video: "./video/volleyball.mp4",
    img: "./img/ActionGames/volleyballicon.png",
    bgimg: "./img/ActionGames/volleyballbg.png",
    imgcard: [
      "../img/ActionGames/volleyball1.png",
      "../img/ActionGames/volleyball2.png",
      "../img/ActionGames/volleyball3.png",
    ],
    desc: "Pick Up and Play!",
    about:
      "A unique volleyball experience for the sports enthusiast is now here as a mobile game! Volleyball Arena is an online fast paced 1v1 game where each second truly counts. Enjoy incredible graphics in this fresh, easy to play yet competitive volley game. Challenge your opponents to a fun, casual game, with simple, intuitive controls and engaging gameplay! Master the playing field and take pride in showing off the special characters and prizes that you’ll unlock along the way! ",
    commentsObj: {
      id: 25,
      name: "Julián Valencia",
      date: "August 20, 2024",
      comment:
        "Great game and concept if you enjoy volleyball!! only downsides is that you can't play with friends like in the 8ball game, and it's not possible to change the button's position, so it's comfortable to play. also kind of pay to win like most miniclip games, but if you really have good strategy, you can beat the pay to win. I'm really sad u can't play with friends. That's the only reason I don't give more stars, I hope they allow that in the future",
      helpfull: 48,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 7, 2016",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Miniclip.com",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "800",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 26,
    name: "Chess",
    rate: 4.6,
    rating: [{ 1: 0 }, { 2: 74 }, { 3: 62 }, { 4: 80 }, { 5: 60 }],
    genre: "Sport . Casual . Board",
    video: "./video/chess.mp4",
    img: "./img/ActionGames/chessicon.jpg",
    bgimg: "./img/ActionGames/chessbg.jpg",
    imgcard: [
      "../img/ActionGames/chess1.jpg",
      "../img/ActionGames/chess2.png",
      "../img/ActionGames/chess3.jpg",
    ],
    desc: "Experience the Ultimate Chess App - Free to Install and Play!",
    about:
      "Whether you're just starting out or you are a seasoned chess expert, Chess Club is designed for all skill levels. Enjoy unlimited free chess games, challenge various opponents, develop your strategies, and sharpen your mind. Join millions of other players - enjoy free, unlimited 2D or 3D chess games and improve your chess rating!",
    commentsObj: {
      id: 26,
      name: "Mark A",
      date: "April 19, 2025",
      comment:
        "Only played vs Computer which plays pretty well. As a complete chess novice, the difficulty jump from 2-Easy to 3-Middle feels too high. Would also be good to remove the naff characters from the top left corner. I also paid to remove ads, and this in general works but there are occasions after a game when you can watch additional videos/ads to retry the last move. I'd rather this option not be there at all (and wasn't made clear on purchase)",
      helpfull: 403,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "May 11, 2019",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "GamoVation",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "750",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+6",
      },
    ],
  },
  {
    id: 27,
    name: "Basketball Stars",
    rate: 4.6,
    rating: [{ 1: 10 }, { 2: 32 }, { 3: 62 }, { 4: 70 }, { 5: 75 }],
    genre: "Sport . Casual . BasketBall",
    video: "./video/basketball.mp4",
    img: "./img/ActionGames/basketballicon.png",
    bgimg: "./img/ActionGames/basketballbg.png",
    imgcard: [
      "../img/ActionGames/basketball1.png",
      "../img/ActionGames/basketball2.png",
      "../img/ActionGames/basketball3.png",
    ],
    desc: "From the creators of multiple smash-hit online multiplayer sports games!",
    about:
      "Dribble, shoot, score, WIN in this competitive live multiplayer Basketball game on mobile! Grab the ball and smash it into the basket with BASKETBALL STARS. Play fast-paced, authentic 1v1 multiplayer basketball! Show your skills, moves and fakes to juke out your opponent and shoot for the ...",
    commentsObj: {
      id: 27,
      name: "Jason",
      date: "July 31, 2025",
      comment:
        "Overall, it's an amazing game. But, I feel that there could be more depth. For example; the ability to dunk against online players for extra points if your falling behind but you have to get a certain amount of backboard shots in a row or something. Or custom jerseys, with custom names and numbers and an in-match chat. Also, 2v2 would be fun. These are just some ideas I had.",
      helpfull: 15,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "May 1, 2019",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Miniclip.com",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "700",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+6",
      },
    ],
  },
  {
    id: 28,
    name: "Card Crawl Adventure",
    rate: 4.2,
    rating: [{ 1: 51 }, { 2: 50 }, { 3: 75 }, { 4: 80 }, { 5: 70 }],
    genre: "Card . Card Battler . Offline",
    video: "./video/card.mp4",
    img: "./img/ActionGames/crawlicon.png",
    bgimg: "./img/ActionGames/crawlbg.png",
    imgcard: [
      "../img/ActionGames/crawl1.png",
      "../img/ActionGames/crawl2.png",
      "../img/ActionGames/crawl3.png",
    ],
    desc: "Card Crawl Adventure is a solitaire style roguelike deckbuilding card game.",
    about:
      "In this single player card game you travel the world to visit cozy Taverns, play against devious monsters and loot shiny treasures. By drawing a path across your cards you combine them to create powerful attacks and magical spells. Collect and improve your cards, equip powerful items and refine your strategy. Each character comes with its own cards and effects which will challenge your wit, ...",
    commentsObj: {
      id: 28,
      name: "Ryan Borer",
      date: "November 30, 2022",
      comment:
        "Arnold Rauers is a very talented and creative guy. I love his games too death, but my favorite is Card Thief. This game's mechanics are similar is many ways to the aforementioned, but much more confusing in their presentation. I don't mind complexity and maybe I am missing something, but I am unable to feel the same level of tactical control I do with his other games.",
      helpfull: 38,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 5, 2021",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Arnold Rauers",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "982",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 29,
    name: "GWENT",
    rate: 4.6,
    rating: [{ 1: 80 }, { 2: 70 }, { 3: 52 }, { 4: 63 }, { 5: 65 }],
    genre: "Card . Card Battler . Fantasy",
    video: "./video/gwent.mp4",
    img: "./img/ActionGames/gwenticon.png",
    bgimg: "./img/ActionGames/gwentbg.png",
    imgcard: [
      "../img/ActionGames/gwent13.png",
      "../img/ActionGames/gwent2.png",
      "../img/ActionGames/gwent3.png",
    ],
    desc: "Join in The Witcher universe’s favorite card game — available for free!",
    about:
      "Blending the CCG and TCG genres, GWENT sees you clash in fast-paced online PvP duels that combine bluffing, on-the-fly decision making and careful deck construction. Collect and command Geralt, Yennefer and other iconic Witcher-world heroes. Grow your collectible arsenal with spells and special abilities that dramatically turn the tide of battle. Use deception and clever tricks in your strategy to win the fight in classic, seasonal and Arena modes. Play GWENT: The Witcher Card Game for free now!",
    commentsObj: {
      id: 29,
      name: "Katherine Shan",
      date: "January 7, 2025",
      comment:
        "It's not the same Gwent as in Witcher 3, which is what I was hoping for. This game plays a lot more like common TCGs, where you have animated allies that cast spells, there's an overwhelming ton of different synergies and new cards (that were never a part of W3's Gwent), the cards are mostly general fantasy characters (whereas in W3, they were themed to the countries and factions), and stuff like that. The simplicity and focus of W3's Gwent is completely gone.",
      helpfull: 22,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 5, 2020",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "CD PROJEKT S.A.",
      },
      {
        title: "Size",
        icon: "GB",
        desc: "5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+16",
      },
    ],
  },
  {
    id: 30,
    name: "The WW2 Card Game",
    rate: 4.6,
    rating: [{ 1: 80 }, { 2: 70 }, { 3: 52 }, { 4: 63 }, { 5: 65 }],
    genre: "Card . Card Battler . Fantasy",
    video: "./video/ww2.mp4",
    img: "./img/ActionGames/ww2icon.png",
    bgimg: "./img/ActionGames/ww2bg.jpg",
    imgcard: [
      "../img/ActionGames/ww21.png",
      "../img/ActionGames/ww22.png",
      "../img/ActionGames/ww23.png",
    ],
    desc: "KARDS: THE ULTIMATE WW2 CARD BATTLE EXPERIENCE",
    about:
      "Step into the heart of World War II with KARDS, the ultimate WW2 card battle and deck builder game. Build powerful decks, command legendary armies, and rewrite history in epic collectible card battles. Download KARDS now and become a legendary commander!",
    commentsObj: {
      id: 30,
      name: "Nicholas Federico",
      date: "May 14, 2025",
      comment:
        "I have been playing for 3 days now, but I have gotten my first basic deck with each faction. I enjoy the mechanics, but I did run into a cheater during a Draft, which felt very uncool as I was on my last win/last loss match. on turn 2 they dropped two 5K tanks and on turn 3 they played their entire hand and attacked me with everything, even without Blitz. The free-to-play aspect feels so slow as to force more payments from players, and I am not sure I will continue to play into steeper levels.",
      helpfull: 19,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 5, 2023",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "1939 Games",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "690.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+7",
      },
    ],
  },
  {
    id: 32,
    name: "MONOPOLY",
    rate: 3.7,
    rating: [{ 1: 10 }, { 2: 5 }, { 3: 11 }, { 4: 22 }, { 5: 31 }],
    genre: "Card . Casual . Solitaire",
    video: "./video/monopoly.mp4",
    img: "./img/ActionGames/monopolyicon.png",
    bgimg: "./img/ActionGames/monopolybg.png",
    imgcard: [
      "../img/ActionGames/monopoly1.jpg",
      "../img/ActionGames/monopoly2.jpg",
      "../img/ActionGames/monopoly3.jpg",
    ],
    desc: "Play Monopoly Solitaire - The Ultimate Free Monopoly and Solitaire Game!",
    about:
      "Welcome to Monopoly Solitaire, where Monopoly meets Solitaire in the best Monopoly Solitaire game! Play Monopoly and experience the thrill of Solitaire combined with the excitement of Monopoly - ideal for fans of strategy, card games, casual hits like bingo, and even poker-style planning! Enjoy Solitaire challenges while exploring the iconic Monopoly board and earning Monopoly tokens. Earn Monopoly rewards, collect Monopoly properties, and grow your Monopoly empire - no waiting, no ads to skip, just a great deal of ...",
    commentsObj: {
      id: 32,
      name: "Division 12",
      date: "June 1, 2025",
      comment:
        "I actually love this game, but it's become unplayable for me. After every deal is an ad, which I don't normally mind because they tend to be skippable pretty quickly, however, the ads recently seem to be breaking the game. Whenever you leave the game it takes you back to game loading in, and all of the ads recently are forcing me to the Google Play store even if I'm hitting the X in the corner to skip them. Resuming game same thing happens. Rinse repeat.",
      helpfull: 16,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 15, 2012",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "MobilityWare",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "900.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 31,
    name: "Pyramid Solitaire",
    rate: 4.3,
    rating: [{ 1: 30 }, { 2: 55 }, { 3: 80 }, { 4: 59 }, { 5: 69 }],
    genre: "Card . Casual . Solitaire",
    video: "./video/pyramid.mp4",
    img: "./img/ActionGames/solitaireicon.png",
    bgimg: "./img/ActionGames/solitairebg.png",
    imgcard: [
      "../img/ActionGames/solitaire1.jpg",
      "../img/ActionGames/solitaire2.jpg",
      "../img/ActionGames/solitaire3.jpg",
    ],
    desc: "This game has been re-imagined and is now better than ever. It's a puzzle game that requires logic and strategy to clear the table",
    about:
      "Looking for a classic card game to play? Look no further than Pyramid Solitaire by MobilityWare - the original Free Pyramid Solitaire game for Android devices. Free Pyramid Solitaire is a game you can play to challenge your brain and have fun solving each Daily Challenge to receive a crown for ...",
    commentsObj: {
      id: 31,
      name: "Louise",
      date: "May 18, 2025",
      comment:
        "This is a fun game that's challenging without being frustrating. I really enjoy the animations after each game, but I have 1 complaint: while the dancing people animations are cute, there are waaay too many of them & it's often hard to tell them apart; so it looks like you're seeing the same thing every time. Other more interesting card animations are very rarely seen. I'd like to see some of the dancing ones replaced with some of the card animations that you have in the Castle Solitaire game.",
      helpfull: 76,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 15, 2017",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "MobilityWare",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "831.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 33,
    name: "FLICK SOLITAIRE",
    rate: 4.5,
    rating: [{ 1: 19 }, { 2: 41 }, { 3: 80 }, { 4: 59 }, { 5: 73 }],
    genre: "Card . Casual . Solitaire",
    video: "./video/flick.mp4",
    img: "./img/ActionGames/flickicon.jpg",
    bgimg: "./img/ActionGames/flickbg.png",
    imgcard: [
      "../img/ActionGames/flick1.jpg",
      "../img/ActionGames/flick2.jpg",
      "../img/ActionGames/flick3.jpg",
    ],
    desc: "Enjoy Flick's cozy, relaxing and satisfying Klondike, Pyramid & Spider Solitaire gameplay as you win and collect beautiful card art.",
    about:
      "Prepare to be obsessed with these awesome interpretations of well-loved classic, and cute card games: Klondike, Pyramid, Spider & Elevens. Fall in love with our free Klondike, Pyramid and Spider solitaire games made even more fun with our unique flick action and gorgeous ...",
    commentsObj: {
      id: 33,
      name: "Elijah Bormann",
      date: "September 11, 2024",
      comment:
        "Fun game with a few different versions of solitaire. Lots of customization options in the settings and I love its support for small artists. My only complaint is that when collecting cards at the end of each level and in the monthly rewards, you can collect cards you already own. This means the more decks you unlock, the harder it is to fully collect all the cards. Maybe 1 in 10 cards isn't a repeat, if that. New cards should have higher odds of appearing.",
      helpfull: 76,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 9, 2015",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Flick Games",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "835.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 34,
    name: "Poker Duel",
    rate: 4.8,
    rating: [{ 1: 20 }, { 2: 59 }, { 3: 70 }, { 4: 59 }, { 5: 71 }],
    genre: "Card",
    video: "./video/poker.mp4",
    img: "./img/ActionGames/pokerduelicon.png",
    bgimg: "./img/ActionGames/pokerduelbg.png",
    imgcard: [
      "../img/ActionGames/pokerduel1.png",
      "../img/ActionGames/pokerduel2.png",
      "../img/ActionGames/pokerduel3.png",
    ],
    desc: "✨ Poker Duel - Card Game is a refreshing spin on the classic card game",
    about:
      "It is a easy to pick up, fast-paced, yet strategic which makes it fun to play. Face an opponent, build stronger poker hands than them, at the best of 5 lines. Just like the River in a Texas Hold'em, the central cards belong to both players. If you enjoy blackjack, rummy, spades, solitaire, and of course poker, whether multiplayer, online or offline, Poker Duel - Card Game should meet your expectations!",
    commentsObj: {
      id: 34,
      name: "Yasser dali",
      date: "February 22, 2025",
      comment:
        "Too many annoying ads show up in the middle and end of every game, which is disturbing",
      helpfull: 5,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 9, 2015",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "IsCool Entertainment",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "510",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 35,
    name: "Cards and Castles",
    rate: 4.5,
    rating: [{ 1: 80 }, { 2: 61 }, { 3: 70 }, { 4: 60 }, { 5: 73 }],
    genre: "Card . Card battler . Casual",
    video: "./video/castles.mp4",
    img: "./img/ActionGames/castlesicon.png",
    bgimg: "./img/ActionGames/castlesbg.jpg",
    imgcard: [
      "../img/ActionGames/castles1.png",
      "../img/ActionGames/castles2.png",
      "../img/ActionGames/castles3.png",
    ],
    desc: "Collectible cards spring to life in this wacky Tactical CCG. Build a deck to challenge your friends and rivals, and engage in glorious CARD BATTLES! Will you choose fearsome vikings, or the deadly squirrels?",
    about:
      "Both incredibly deep and easy for new players to pick up, this fun and wacky CCG features a tactical board for a touch of strategy. Cards played spring to life on the battlefield as animated characters who can move and block enemies, adding depth to the traditional CCG formula. Build unique decks from 7 different iconic factions: Vikings, Crusaders, Warlocks, Pirates, Ninjas, Druids, and the NEWLY ...",
    commentsObj: {
      id: 35,
      name: "grandpaminisoda",
      date: "April 22, 2025",
      comment: "I like the game, it's very fun and unique",
      helpfull: 10,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 9, 2024",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Red Team Games",
      },
      {
        title: "Size",
        icon: "GB",
        desc: "2",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 36,
    name: "Runestrike CCG",
    rate: 4.5,
    rating: [{ 1: 50 }, { 2: 80 }, { 3: 71 }, { 4: 75 }, { 5: 40 }],
    genre: "Card . Card battler . Casual",
    video: "./video/ccg.mp4",
    img: "./img/ActionGames/ccgicon.png",
    bgimg: "./img/ActionGames/ccgbg.jpg",
    imgcard: [
      "../img/ActionGames/ccg1.png",
      "../img/ActionGames/ccg2.png",
      "../img/ActionGames/ccg3.png",
    ],
    desc: "Build your collection with beautifully drawn runes, whether it’s a common Hammerfist Giant or the legendary Jupiter himself",
    about:
      "Enter the world of Runestrike, where mortal Champions battle to master powerful runes and overthrow ancient gods. Runestrike is an online turn-based card game that offers brisk play and deep strategy built on straight-forward mechanics. Download today to build decks, level your Champions, and enjoy both challenging single-player content and pvp.",
    commentsObj: {
      id: 36,
      name: "Royseph Shambairs",
      date: "November 16, 2021",
      comment:
        "It's a great card game that's devised well. I've gotten far in a short time without paying any real money, so it's not P2P, for the most part. If any of you play Gwent, you'll love this one. Originally, I had given this 3 stars due to spending 1,000 in-game gold for 5 core packs, but the game had stalled when I tried to open 2 of them. They responded to me about this, and I later discovered that the 2 packs were redeemed, after all. Great customer service is a plus!🙂",
      helpfull: 14,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 9, 2020",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Making Fun",
      },
      {
        title: "Size",
        icon: "GB",
        desc: "1.5",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+7",
      },
    ],
  },
  {
    id: 37,
    name: "Baby Games",
    rate: 4.6,
    rating: [{ 1: 50 }, { 2: 80 }, { 3: 71 }, { 4: 75 }, { 5: 40 }],
    genre: "Kids . Cartoon . Educational",
    video: "./video/baby.mp4",
    img: "./img/ActionGames/babyicon.png",
    bgimg: "./img/ActionGames/babybg.png",
    imgcard: [
      "../img/ActionGames/baby1.png",
      "../img/ActionGames/baby2.png",
      "../img/ActionGames/baby3.png",
    ],
    desc: "Baby Games for 1-3 Year Olds provides a safe, learning experience for preschool toddlers aged 1-3 years old",
    about:
      "Keep your baby occupied playing 15 safe, educational games like ABC, Math, Dino World, Coloring, Musical Instruments , and much more, that will help toddlers learn while having fun. allowing them to spend time honing their motor skills whilst taking the first steps on their education journey.",
    commentsObj: {
      id: 37,
      name: "Aaron Schuman",
      date: "August 4, 2025",
      comment:
        "Good games for toddlers. I'd rather pay a one time fee than a subscription. Staying on the free version. edit in response to app reply: There are free games, but the locked games are intentionally left in the game and in between free ones so kids are encouraged to tap them. This opens a window to subscribe which is a little predatory. Luckily my purchases are secured by passcode but other parents may not have that feature in place causing unintentional payments.",
      helpfull: 1,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 9, 2023",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Bebi Family: preschool learning games for kids",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "400",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 38,
    name: "Balloon Pop",
    rate: 4.4,
    rating: [{ 1: 10 }, { 2: 0 }, { 3: 60 }, { 4: 80 }, { 5: 50 }],
    genre: "Kids . Language . Educational",
    video: "./video/balloon.mp4",
    img: "./img/ActionGames/balloonicon.png",
    bgimg: "./img/ActionGames/balloonbg.png",
    imgcard: [
      "../img/ActionGames/balloon1.png",
      "../img/ActionGames/balloon2.png",
      "../img/ActionGames/balloon3.png",
    ],
    desc: "the fun balloon popping baby game for kids aged 2-5",
    about:
      "Balloon Pop is the ultimate balloon popping game for kids, boasting 9 creative scenes, each with different challenges. Support and encourage your toddler to learn their ABCs, numbers, colors, shapes and even animal names in a 100% ad free, safe environment.",
    commentsObj: {
      id: 38,
      name: "Linda G",
      date: "August 3, 2025",
      comment:
        "I downloaded this for my son who is now 2. He loved it so I paid to unlock all 4 (alphabet, numbers, colours and shapes) not too long ago so if he exited the one he was on he could choose another option. It was recently upgraded and now half way through a level is a task he is too young to understand (match the shape or size) so I have to sit and help. It also has several other games on the main screen that he tries to open. Basically I wasted my money on the unlocking the other levels",
      helpfull: 3,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2024",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Bebi Family: preschool learning games for kids",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "410",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 39,
    name: "LooLoo Kids",
    rate: 3.8,
    rating: [{ 1: 15 }, { 2: 20 }, { 3: 60 }, { 4: 60 }, { 5: 60 }],
    genre: "Kids . Language . Educational",
    video: "./video/looloo.mp4",
    img: "./img/ActionGames/loolooicon.png",
    bgimg: "./img/ActionGames/looloobg.png",
    imgcard: [
      "../img/ActionGames/looloo1.png",
      "../img/ActionGames/looloo2.png",
      "../img/ActionGames/looloo3.png",
    ],
    desc: "Have fun in 3 year old games free! You will love free toddler girl games!",
    about:
      "LooLoo Kids send their greetings and invite all the kids to learn and play! We know how important it is to spend time usefully and have fun at the same time. Your kid is going to explore the world around us and learn lots of new things. Games for toddlers with with LooLoo Kids guarantees all girls and boys good mood! Free kids games for girls are waiting for everyone!",
    commentsObj: {
      id: 39,
      name: "Vikul Kumar",
      date: "July 19, 2025",
      comment: "very good for kids intrestid",
      helpfull: 13,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2024",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "DEVGAME KIDS games",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "750",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 40,
    name: "Find Hidden Objects",
    rate: 4.6,
    rating: [{ 1: 69 }, { 2: 71 }, { 3: 75 }, { 4: 70 }, { 5: 80 }],
    genre: "Brain . Hidden Object . Casual",
    video: "./video/hidden.mp4",
    img: "./img/ActionGames/findicon.jpg",
    bgimg: "./img/ActionGames/findbg.jpg",
    imgcard: [
      "../img/ActionGames/find1.jpg",
      "../img/ActionGames/find2.jpg",
      "../img/ActionGames/find3.jpg",
    ],
    desc: "Welcome to 'Find Hidden Objects - Spot It!' — Find Hidden Objects & Relax!",
    about:
      "Embark on a relaxing and enjoyable journey through hundreds of levels. Have fun while improving your skills to spot hidden objects in stunning, high-definition pictures.",
    commentsObj: {
      id: 40,
      name: "TJ Holloway",
      date: "June 16, 2025",
      comment:
        "Very enjoyable game without long, drawn out ads. As one who would never pay money for a game, I'm happy to wait out short, informative ads. For the producers of games, don't insult our intelligence with long, drawn out ads! We don't need to see a demonstration over and over and over. It only takes a few seconds to see promise in a game's potential. Thanks for these guys, for not using long ads!",
      helpfull: 40,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2024",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Yolo Game Studios",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "610",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 41,
    name: "Tricky Puzzles",
    rate: 4.6,
    rating: [{ 1: 69 }, { 2: 71 }, { 3: 75 }, { 4: 70 }, { 5: 80 }],
    genre: "Brain . Fantasy . Brain teaser",
    video: "./video/tricky.mp4",
    img: "./img/ActionGames/trickyicon.png",
    bgimg: "./img/ActionGames/trickybg.jpg",
    imgcard: [
      "../img/ActionGames/tricky1.jpg",
      "../img/ActionGames/tricky2.jpg",
      "../img/ActionGames/tricky3.jpg",
    ],
    desc: "Brain Test is an addictive free tricky puzzle game with a series of tricky brain teasers",
    about:
      "You can enjoy yourself with your friends with this addictive and funny free IQ game. Brain games, IQ games and mind games can be a great way to enhance your brain. Think out of the box, crack the puzzles and get ready to take the quiz! You will enjoy this funny tricky test. This game is a new game and an offline game. Also one of the best games in the world. When you're tired and need to brain ...",
    commentsObj: {
      id: 41,
      name: "Alex Archibald",
      date: "June 22, 2025",
      comment:
        "This game is so fun. I recently went to Paris, then from Paris to Brussels, Brussels to Amsterdam, and had to take lots of trains. I had this game but never really used it, so I decided to try it out. Now I'm addicted to it! It works with no Wi-Fi. It really takes up time you don't want. Though it does have ads, you can purchase no ads for $3.99 USD. There are no ads on no WiFi. Some levels seemed impossible, so i skipped them, which they do have. I played a lot on the train. Would recommend!",
      helpfull: 595,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2022",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Unico Studio",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "925.3",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+7",
      },
    ],
  },
  {
    id: 42,
    name: "Room Game",
    rate: 3.9,
    rating: [{ 1: 52 }, { 2: 71 }, { 3: 69 }, { 4: 61 }, { 5: 64 }],
    genre: "Brain . Escape . Mystery",
    video: "./video/roomgame.mp4",
    img: "./img/ActionGames/escapeicon.png",
    bgimg: "./img/ActionGames/escapebg.jpg",
    imgcard: [
      "../img/ActionGames/escape1.png",
      "../img/ActionGames/escape2.png",
      "../img/ActionGames/escape3.png",
    ],
    desc: "🔍 Unleash Your Inner Detective! Join Fiona on an Unforgettable Mystery Adventure! 🔍",
    about:
      "Are you ready to dive headfirst into the captivating world of mysteries and puzzles? Step into the shoes of Fiona, the fearless journalist detective, and get ready to experience an escape room game like no other. Prepare yourself for an exhilarating adventure mystery filled with twists, turns, and mind-bending challenges that will put your detective skills to the ultimate test.",
    commentsObj: {
      id: 42,
      name: "Abbey Francis",
      date: "June 29, 2025",
      comment:
        "This game is enjoyable but I'm tempted to uninstall it. The ads are too long, hints cost too much, the energy takes too long to replenish and some puzzles are almost impossible to find and solve. Currently doing a level that is 'hard' and the reward (50 coins) is the same as a regular level. So more effort for the same reward?",
      helpfull: 8,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2021",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Webelinx Games",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "723.8",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+7",
      },
    ],
  },
  {
    id: 43,
    name: "Dop",
    rate: 4.5,
    rating: [{ 1: 52 }, { 2: 71 }, { 3: 69 }, { 4: 61 }, { 5: 64 }],
    genre: "Brain . Casual . Stylzed",
    video: "./video/dop.mp4",
    img: "./img/ActionGames/dopicon.png",
    bgimg: "./img/ActionGames/dopbg.png",
    imgcard: [
      "../img/ActionGames/dop1.png",
      "../img/ActionGames/dop2.png",
      "../img/ActionGames/dop3.png",
    ],
    desc: "Think you’re smart? Then delete one part! 🤯",
    about:
      " Download this popular brain game and use logic to solve fun and clever puzzles! 🧠 EFFORTLESS GAMEPLAY, CHALLENGING BRAIN TEASERS",
    commentsObj: {
      id: 43,
      name: "Willoh Munguia",
      date: "July 19, 2025",
      comment:
        "This game is pretty fun, but after finishing two of the levels they give me an ad 😭 lake come on you're not YouTube. in fact they give me more ads and more frequently than YouTube. so I just like to warn you of how much adds they will give you but the overall game is pretty fun special for me who has like almost nothing to do and most of the day but there's not too much good things to say about this other than it does gradually get harder for me thank you.",
      helpfull: 18,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2023",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "SayGames Ltd",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "910",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+12",
      },
    ],
  },
  {
    id: 44,
    name: "sudoku",
    rate: 4.8,
    rating: [{ 1: 0 }, { 2: 72 }, { 3: 75 }, { 4: 70 }, { 5: 81 }],
    genre: "Brain . sudoku . Casual",
    video: "./video/sudoku.mp4",
    img: "./img/ActionGames/sudokuicon.png",
    bgimg: "./img/ActionGames/sudokubg.jpg",
    imgcard: [
      "../img/ActionGames/sudoku1.jpg",
      "../img/ActionGames/sudoku2.jpg",
      "../img/ActionGames/sudoku3.jpg",
    ],
    desc: "Enjoy the Classic Sudoku Puzzle Game for free!",
    about:
      "Sudoku Puzzle Game stands out as a mind-boosting and intellectual brain sudoku number game on Google Play, with playing sudoku offline. You can download the Sudoku app for your Android phone and tablet to enjoy a Sudoku no ads experience! It's the perfect.",
    commentsObj: {
      id: 44,
      name: "simon casey-culverhouse",
      date: "June 14, 2025",
      comment:
        "Ads upon ads upon ads. This used to be a good game. Now you are fighting ads more than playing the game. The small ads at the bottom would not be a big deal but they now have sound which is obnoxious when trying to play a game. If you mute one, it does not mute others. There are also full screen ads that slide in in the middle of a game. If you can imagine it, an is going to appear. And this is all happening when you are trying to complete a puzzle in the best time possible. INEXCUSABLE!",
      helpfull: 39,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "July 19, 2019",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Oakever Games",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "910",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
  {
    id: 45,
    name: "Who is?",
    rate: 4.5,
    rating: [{ 1: 63 }, { 2: 10 }, { 3: 56 }, { 4: 32 }, { 5: 77 }],
    genre: "Brain . Casual . stylized",
    video: "./video/who.mp4",
    img: "./img/ActionGames/whoicon.jpg",
    bgimg: "./img/ActionGames/whobg.png",
    imgcard: [
      "../img/ActionGames/who1.png",
      "../img/ActionGames/who2.png",
      "../img/ActionGames/who3.png",
    ],
    desc: "Who is? Brain Teaser & Riddles is a completely free riddle game, which will challenge your brain and mind",
    about:
      "A brand new puzzle and riddle game comes from the makers of fun-favorite Brain Test: Tricky Puzzles, Brain Test 2: Tricky Stories and Brain Test 3: Tricky Quests. If you like brain games and mind games then you will relax with this puzzle game and play for your brain out training. Who is Lying? Who is the killer? and Who is the imposter?. Find flashback answers to these tricky riddles with one of the popular puzzle games for adults.",
    commentsObj: {
      id: 45,
      name: "Michael Stroud",
      date: "June 21, 2025",
      comment:
        "it's kinda tricky but I can feel the ad monster coming. I'll keep you posted. if I get to level 20 without throwing my phone. I'll give five stars. but if I get two more ads, I'm gonna be uninstalling and throwing my phone, cuz ads suck. update, I threw my phone, by level 5 and twenty seconds from my first review, there was two more ads. do the devs really expect us to just deal with this? not a chance. I hope my phones ok. this game is greedy. unplayable. 1 star. ads are unfun!",
      helpfull: 4,
    },
    summery: [
      {
        title: "Platform",
        icon: <SiPlatformio />,
        desc: "iOS & Android",
      },
      {
        title: "Initial Release Date",
        icon: <FaBirthdayCake />,
        desc: "June 19, 2023",
      },
      {
        title: "Developer",
        icon: <MdOutlineDeveloperBoard />,
        desc: "Unico Studio",
      },
      {
        title: "Size",
        icon: "MB",
        desc: "871.6",
      },
      {
        title: "Age",
        icon: <FaPersonWalkingLuggage />,
        desc: "+3",
      },
    ],
  },
];

export let membersTeam = [
  {
    id: 1,
    surname: "ALUKA",
    img: "img/People/1.png",
    characteristics: {
      name: "Inessa Frock Strauss",
      gender: "Female",
      country: "Switzerland",
      age: "31 years old",
    },
  },
  {
    id: 2,
    surname: "GARPY",
    img: "img/People/2.png",
    characteristics: {
      name: "Garett Marshall",
      gender: "Male",
      country: "United Kingdom",
      age: "33 years old",
    },
  },
  {
    id: 3,
    surname: "BOWMAN",
    img: "img/People/3.png",
    characteristics: {
      name: "Viggo Hanson",
      gender: "Male",
      country: "Sweden",
      age: "33 years old",
    },
  },
];
export let tips = [
  {
    id: 1,
    title: "Stay Focused",
    desc: "short daily practice makes you better",
  },
  {
    id: 2,
    title: "Faster Reactions",
    desc: "Customize your controls for speed",
  },
  {
    id: 3,
    title: "Mater Enemies",
    desc: "Learn their attack patterns",
  },
  {
    id: 4,
    title: "Watch and Learn",
    desc: "Check pro players strategies",
  },
  {
    id: 5,
    title: "Take breaks",
    desc: "Fresh mind react faster",
  },
  {
    id: 6,
    title: "Adjust settings",
    desc: "find smooth graphics and sound",
  },
  {
    id: 7,
    title: "Play Together",
    desc: "TeamWork make victory easier",
  },
  {
    id: 8,
    title: "Stay Patient",
    desc: "Failure is a part of wining",
  },
  {
    id: 9,
    title: "Track Progress",
    desc: "set goals & celebrate improvements",
  },
  {
    id: 10,
    title: "Practice daily",
    desc: "even short sessions improve your skills",
  },
  {
    id: 11,
    title: "Customize ypur controls",
    desc: "comfort boosts reaction time",
  },
  {
    id: 12,
    title: "study enemy patterns",
    desc: "every boss has a weakness",
  },
  {
    id: 13,
    title: "watch pro players",
    desc: "learn new strategies and tricks",
  },
];
