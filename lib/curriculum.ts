// EA Hoops — Full Jr Basketball Curriculum
// Source: https://elevationathletics.ca/jr-basketball-curriculum/
// Scraped 2026-07-08

export type Drill = string;

export interface Section {
  heading: string;
  drills: Drill[];
}

export interface Session {
  id: number;
  title: string;
  url: string;
  sections: Section[];
}

export interface Level {
  id: string;
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  description: string;
  skillsPdfUrl: string;
  sessions: Session[];
}

export const CURRICULUM: Level[] = [
  {
    id: "rookie",
    name: "Rookie",
    shortName: "Rookie",
    color: "#E8A838",
    bgColor: "#FEF3E2",
    description: "Foundational skills for first-time players. Focus on fun, movement, and basic ball handling.",
    skillsPdfUrl: "https://elevationathletics.ca/wp-content/uploads/2024/04/ROOKIE.pdf",
    sessions: [
      {
        id: 1,
        title: "Rookie Practice Plan 1",
        url: "https://elevationathletics.ca/rookie-practice-plan-1/",
        sections: [
          { heading: "Warm Up", drills: ["The Escape Game"] },
          { heading: "Ball Handling", drills: ["Tap Drill (multiple levels)", "Waist Wrap Drill (head & legs too)"] },
          { heading: "Passing", drills: ["Stationary Partner Passing Drill"] },
          { heading: "Shooting", drills: ["Partner Step-In Shooting Drill", "Jump Stop Shooting Drill"] },
          { heading: "Team Concepts", drills: ["Teamwork Carry Drill"] },
          { heading: "Competing", drills: ["Know Your Team Game", "Compliment Session"] },
        ],
      },
      {
        id: 2,
        title: "Rookie Practice Plan 2",
        url: "https://elevationathletics.ca/rookie-practice-plan-2/",
        sections: [
          { heading: "Warm Up", drills: ["Run To That Line Drill", "Forward, Backward, Lateral March", "Quick Feet", "Side/Lateral Push Drill"] },
          { heading: "Ball Handling", drills: ["Toss And Catch Drill (adds a clap, 2, 3, turn)", "Stationary Crossover (Low/Middle/High)", "Fundamentals of Dribbling", "Up Or Down Game"] },
          { heading: "Offense", drills: ["1-2-3 Triple Threat"] },
          { heading: "Passing", drills: ["Gates Passing | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Footwork and Conditioning", drills: ["The Red Light Game"] },
          { heading: "Team Concepts", drills: ["Shooting Line Game"] },
          { heading: "Competing", drills: ["1 on 1 Numbers Game", "2-On-2 Numbers Game", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 3,
        title: "Rookie Practice Plan 3",
        url: "https://elevationathletics.ca/rookie-practice-plan-3/",
        sections: [
          { heading: "Warm Up", drills: ["Run To That Line Drill"] },
          { heading: "Ball Handling", drills: ["Smacks Drill", "Tap Drill (multiple levels)", "Stationary Crossover (Low/Middle/High)", "4 Corners | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App", "Stationary Partner Passing Drill"] },
          { heading: "Shooting", drills: ["Perfect Shot (No Basket)"] },
          { heading: "Team Concepts", drills: ["Teamwork Carry Drill"] },
          { heading: "Competing", drills: ["Coach Says Drill", "Compliment Session"] },
        ],
      },
      {
        id: 4,
        title: "Rookie Practice Plan 4",
        url: "https://elevationathletics.ca/rookie-practice-plan-4/",
        sections: [
          { heading: "Ball Handling", drills: ["Up Or Down Game", "Dribble Knockout"] },
          { heading: "Footwork and Conditioning", drills: ["Jump Stop, Pivot, & Pass Drill", "Forward Pivot Drill", "Reverse Pivot Drill"] },
          { heading: "Shooting", drills: ["Fundamentals of Lay-Ups", "Layup Hi-Five Drill", "Layup Skip Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of The Out Cut", "Pass & Cut Drill", "Fundamentals of A Defensive Stance", "Closeout, Slide, & Backpedal Drill"] },
          { heading: "Competing", drills: ['Flying Numbers | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App', 'Coach What Time is It?" Game', "Compliment Session"] },
        ],
      },
      {
        id: 5,
        title: "Rookie Practice Plan 5",
        url: "https://elevationathletics.ca/rookie-practice-plan-5/",
        sections: [
          { heading: "Warm Up", drills: ["Freeze Tag"] },
          { heading: "Ball Handling", drills: ["1-Hand Moving Rolls", "Low Dribble Drill (add numbers)", "Middle Dribble Drill (add numbers)", "High Dribble Drill (add number)", "Pac-Man | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Passing", drills: ["Basketball Tennis | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Shooting", drills: ["1-Step Form Shooting"] },
          { heading: "Competing Skills", drills: ["Make For A Cone Game"] },
          { heading: "Rebounding", drills: ["Self-Toss Rebounding Drill"] },
          { heading: "Team Concepts", drills: ["Give & Go Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 6,
        title: "Rookie Practice Plan 6",
        url: "https://elevationathletics.ca/rookie-practice-plan-6/",
        sections: [
          { heading: "Ball Handling", drills: ["Follow The Leader", "Space Treasure | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Passing", drills: ["Passing Tag | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Shooting", drills: ["Block To Block Shooting Drill"] },
          { heading: "Competitive Drills", drills: ["Make For A Cone Game"] },
          { heading: "Footwork and Conditioning", drills: ["Conditioning | Zig Zag Jumps Bounds"] },
          { heading: "Team Concepts", drills: ["Defense, I Love It Drill", "Closeout, Slide, & Backpedal Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 7,
        title: "Rookie Practice Plan 7",
        url: "https://elevationathletics.ca/rookie-practice-plan-7/",
        sections: [
          { heading: "Warm Up", drills: ["Sharks and Minnows | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Ball Handling", drills: ["Low Dribble Drill (add numbers)", "Middle Dribble Drill (add numbers)", "High Dribble Drill (add number)", "Cone Dribbling Drill", "Pac-Man | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Passing", drills: ["Hit the Cone | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Footwork and Conditioning", drills: ["Reverse Pivot Drill"] },
          { heading: "Rebounding", drills: ["Self-Toss Rebounding Drill"] },
          { heading: "Team Concepts", drills: ["Reverse The Ball Drill"] },
          { heading: "Competing", drills: ["2 on 2 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 8,
        title: "Rookie Practice Plan 8",
        url: "https://elevationathletics.ca/rookie-practice-plan-8/",
        sections: [
          { heading: "Ball Handling", drills: ["Dribble Balance Drill", "Snake | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App", "Capture The Cones Game"] },
          { heading: "Footwork and Conditioning", drills: ["The Red Light Game"] },
          { heading: "Passing", drills: ["Open & Decide Drill"] },
          { heading: "Competitive Drills", drills: ["The Layup Bowling Game"] },
          { heading: "Shooting", drills: ["Frequent Flyers | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Team Concepts", drills: ["Tracing The Ball Breakdown Drill"] },
          { heading: "Competing", drills: ["One Up | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App", "Compliment Session"] },
        ],
      },
      {
        id: 9,
        title: "Rookie Practice Plan 9",
        url: "https://elevationathletics.ca/rookie-practice-plan-9/",
        sections: [
          { heading: "Warm Up", drills: ["Over Under Relay Drill"] },
          { heading: "Ball Handling", drills: ["Dribble Balance & Push Drill"] },
          { heading: "Passing", drills: ["Who Is Ready Drill", "Keep Away | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Rebounding", drills: ["Toss & Get It Drill"] },
          { heading: "Shooting", drills: ["Chase Layup Drill", "Wrap Battle | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Team Concepts", drills: ["Reverse The Ball Drill", "Coach Says Drill"] },
          { heading: "Competing", drills: ["One Up | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App", "Compliment Session"] },
        ],
      },
      {
        id: 10,
        title: "Rookie Practice Plan 10",
        url: "https://elevationathletics.ca/rookie-practice-plan-10/",
        sections: [
          { heading: "Cultivating Values & Developing Wellness", drills: ["Respect: Opponents"] },
          { heading: "Warm Up", drills: ["The Escape Game"] },
          { heading: "Ball Handling", drills: ["Up Or Down Game", "Cone Dribbling Drill", "Capture The Cones Game"] },
          { heading: "Passing", drills: ["Open & Decide Drill"] },
          { heading: "Footwork & Conditioning", drills: ["Land, Air, Sea | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Shooting", drills: ["Rock Paper Scissors | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Team Concepts", drills: ["Drive & Kick Competition", "Make For A Cone Game"] },
          { heading: "Competing", drills: ["Half-Court 2 on 2 | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
        ],
      },
      {
        id: 11,
        title: "Rookie Practice Plan 11",
        url: "https://elevationathletics.ca/rookie-practice-plan-11/",
        sections: [
          { heading: "Warm Up", drills: ["Freeze Tag"] },
          { heading: "Building Skills", drills: ["Mascot Tag | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Ball Handling", drills: ["Follow The Leader"] },
          { heading: "Shooting", drills: ["Block To Block Shooting Drill", "Around The World"] },
          { heading: "Passing", drills: ["Dribble, Jump Stop, & Pass Drill"] },
          { heading: "Rebounding", drills: ["Dribble Relay Drill", "Toss & Get It Drill"] },
          { heading: "Team Concepts", drills: ["Follow The Leader Slides Drill", "Pass & Cut Drill"] },
          { heading: "Competing", drills: ["3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 12,
        title: "Rookie Practice Plan 12",
        url: "https://elevationathletics.ca/rookie-practice-plan-12/",
        sections: [
          { heading: "Warm Up", drills: ["4 Corners | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Ball Handling", drills: ["5-5-5 Creative Dribble Drill", "Dribble Knockout"] },
          { heading: "Shooting", drills: ["Frequent Flyers | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Competitive Drills", drills: ["The Layup Bowling Game"] },
          { heading: "Passing", drills: ["Basketball Tennis | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App", "Hit the Cone | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
    ],
  },
  {
    id: "starter",
    name: "Starter",
    shortName: "Starter",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    description: "Building on the basics. Develop shooting fundamentals, passing, and intro team concepts.",
    skillsPdfUrl: "https://elevationathletics.ca/wp-content/uploads/2024/04/STARTER.pdf",
    sessions: [
      {
        id: 1,
        title: "Starter Practice Plan 1",
        url: "https://elevationathletics.ca/starter-practice-plan-1/",
        sections: [
          { heading: "Warm Up", drills: ["Fundamentals Of Warming-Up", "Run To That Line Drill"] },
          { heading: "Ball Handling", drills: ["Jr. NBA at Home: Single Leg Wraps Drill", "1 Seated Dribbling for Beginners", "3-3-3 Dribble Drill", "Cone Dribbling Drill"] },
          { heading: "Shooting", drills: ["1-Step Form Shooting", "One-Hand Shooting Drill with Allan Houston", "Shooting Line Game"] },
          { heading: "Footwork & Conditioning", drills: ["Dribble, Jump Stop, & Pass Drill"] },
          { heading: "Team Concepts", drills: ["The Pass Is Faster Drill", "Fundamentals of A Defensive Stance", "Defense, I Love It Drill"] },
          { heading: "Competing", drills: ["Dribble Relay Drill", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 2,
        title: "Starter Practice Plan 2",
        url: "https://elevationathletics.ca/starter-practice-plan-2/",
        sections: [
          { heading: "Warm Up", drills: ["The Walking Hamstring Stretch", "Walking Kicks"] },
          { heading: "Ball Handling", drills: ["Stationary 1-2 Behind The Back Drill", "Side-To-Side & Between Dribble Drill", "Fundamentals Of The Retreat Dribble", "Retreat Dribble Drill"] },
          { heading: "Passing", drills: ["Fundamentals Of Receiving The Outlet Pass", "Receiving The Outlet Pass Breakdown Drill"] },
          { heading: "Shooting", drills: ["Fundamentals of Lay-Ups", "Fundamentals Of The Drop-Step Layup", "Drop-Step Breakdown Drill", "Layup Hi-Five Drill", "Fundamentals Of The Euro-Step", "Euro-Step Breakdown Drill"] },
          { heading: "Offense", drills: ["1-2-3 Triple Threat"] },
          { heading: "Team Concepts", drills: ["Pass & Cut Drill", "Side/Lateral Push Drill"] },
          { heading: "Competing", drills: ["Elbows Finish Drill", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 3,
        title: "Starter Practice Plan 3",
        url: "https://elevationathletics.ca/starter-practice-plan-3/",
        sections: [
          { heading: "Warm Up", drills: ["Freeze Tag"] },
          { heading: "Ball Handling", drills: ["Stationary Crossover (Low/Middle/High)", "Stationary Under The Leg Dribble Drill"] },
          { heading: "Passing", drills: ["Fundamentals Of The Kick Pass", "The Kick Pass Breakdown Drill", "The Kick Pass Drill"] },
          { heading: "Shooting", drills: ["Fundamentals Of The Up & Under", "Up & Under Breakdown Drill", "Pass & Up & Under Drill"] },
          { heading: "Competitive Drills", drills: ["Make For A Cone Game", "Fundamentals Of The Free Throw", "Free Throw Golf | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of The Drive & Kick", "Drive & Kick Competition", "2-Person Closeout Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 4,
        title: "Starter Practice Plan 4",
        url: "https://elevationathletics.ca/starter-practice-plan-4/",
        sections: [
          { heading: "Ball Handling", drills: ["Low Dribble Drill (add numbers)", "Stationary Crossover (Low/Middle/High)", "3-3-3 Dribble Drill", "Running Dribble Drill (does R/L/Crossover)"] },
          { heading: "Passing", drills: ["Pass & Follow Drill", "Partner Running Pass Drill"] },
          { heading: "Shooting", drills: ["Form Shooting-2 Hands", "Spin Step-In Drill", "Loop Shooting Drill"] },
          { heading: "Team Concepts", drills: ["3-Person Pass, Cut, & Replace", "Reverse The Ball Drill", "Fundamentals Of The Closeout", "The Closeout Breakdown Drill"] },
          { heading: "Competing", drills: ["Closeout 1-On-1 Drill", "Compliment Session"] },
        ],
      },
      {
        id: 5,
        title: "Starter Practice Plan 5",
        url: "https://elevationathletics.ca/starter-practice-plan-5/",
        sections: [
          { heading: "Warm Up", drills: ["The Escape Game"] },
          { heading: "Ball Handling", drills: ["Stationary 2-Ball Dribble Drill (Same Time) -(adds low/middle/high)", "Stationary 2-Ball Dribble Drill (Alternate) -(adds low/middle/high)", "5-5-5 Creative Dribble Drill"] },
          { heading: "Passing", drills: ["Fundamentals Of The Pass Fake", "The Pass Fake Breakdown Drill", "The Pass Fake & Drive Drill"] },
          { heading: "Shooting", drills: ["Fundamentals Of The Shot Fake", "The Shot Fake Breakdown Drill", "The Shot Fake 1-Dribble Pull-Up Drill"] },
          { heading: "Rebounding", drills: ["No Ball Box Out Drill"] },
          { heading: "Defense", drills: ["Side/Lateral Push Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of The Screen", "Fundamentals Of Setting Up A Screen", "Using A Screen Shooting Drill", "Fundamentals Of Tracing The Ball", "Tracing The Ball Breakdown Drill"] },
          { heading: "Competing", drills: ["2 on 2 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 6,
        title: "Starter Practice Plan 6",
        url: "https://elevationathletics.ca/starter-practice-plan-6/",
        sections: [
          { heading: "Warm Up", drills: ["Jr. NBA at Home: Line Hops Drill"] },
          { heading: "Ball Handling", drills: ["Finger Dribble Drill", "Dribble Balance Drill", "Dribble Freeze Tag"] },
          { heading: "Passing", drills: ["Circle Passing | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Shooting", drills: ["Jump Stop Shooting Drill"] },
          { heading: "Rebounding", drills: ["The Wall Box Out Drill"] },
          { heading: "Footwork and Conditioning", drills: ["Fundamentals Of The Jab Step", "The Jab Step Breakdown Drill", "The Jab & Attack Drill"] },
          { heading: "Team Concepts", drills: ["3-Person Pass, Cut, & Replace", "Fundamentals Of Defending A 2-On-1", "Defending The 2-On-1 Drill", "Knockout"] },
          { heading: "Competing", drills: ["3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 7,
        title: "Starter Practice Plan 7",
        url: "https://elevationathletics.ca/starter-practice-plan-7/",
        sections: [
          { heading: "Warm Up", drills: ["Dynamic Warmup | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Ball Handling", drills: ["Front To Back Dribble Drill", "Dribble Balance Drill", "Dribble Balance & Push Drill", "Walk To Jog Dribble Drill"] },
          { heading: "Passing", drills: ["Who Is Ready Drill", "Dribble & Pass To A Target Drill"] },
          { heading: "Shooting", drills: ["Perfect Shot (No Basket)"] },
          { heading: "Rebounding", drills: ["Toss & Get It Drill"] },
          { heading: "Footwork and Conditioning", drills: ["Tuck Back Drill", "On The Whistle Jump Stop Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals of a 2 on 1 Fast Break", "Group Close Out Slide & Trace Drill"] },
          { heading: "Competing", drills: ["On The Block Finish Drill", "Elbows Finish Drill", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 8,
        title: "Starter Practice Plan 8",
        url: "https://elevationathletics.ca/starter-practice-plan-8/",
        sections: [
          { heading: "Warm Up", drills: ["Run To That Line Drill", "Forward, Backward, Lateral March", "High Knees", "Quick Feet", "Side/Lateral Push Breakdown Drill"] },
          { heading: "Ball Handling", drills: ["Ball Slams Drill", "Finger Dribble Drill", "Dribble Balance & Push Drill"] },
          { heading: "Passing", drills: ["Dribble & Pass To A Target Drill", "Slide & Pass Drill", "Partner Running Pass Drill", "Open & Decide Drill"] },
          { heading: "Shooting", drills: ["Form Shooting-2 Hands", "Partner Step-In Shooting Drill", "Chase Layup Drill", "Block To Block Shooting Drill"] },
          { heading: "Team Concepts", drills: ["Post Pass & Screen", "Follow The Leader Slides Drill"] },
          { heading: "Competing", drills: ["Back 1-On-1 Drill", "Compliment Session"] },
        ],
      },
      {
        id: 9,
        title: "Starter Practice Plan 9",
        url: "https://elevationathletics.ca/starter-practice-plan-9/",
        sections: [
          { heading: "Warm Up", drills: ["Knee Hugs", "The Walking Quad Stretch"] },
          { heading: "Ball Handling", drills: ["Smacks Drill", "Tap Drill (multiple levels)", "3-3-3 Dribble Drill", "Stationary In & Out Drill"] },
          { heading: "Passing", drills: ["Open & Decide Drill"] },
          { heading: "Offense", drills: ["Pass & Cut Drill"] },
          { heading: "Shooting", drills: ["Layup Skip Drill", "Loop Shooting Drill"] },
          { heading: "Rebounding", drills: ["Toss & Get It Drill"] },
          { heading: "Team Concepts", drills: ["The Pass Is Faster Drill"] },
          { heading: "Competing", drills: ["2 on 2 Drive and Kick", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 10,
        title: "Starter Practice Plan 10",
        url: "https://elevationathletics.ca/starter-practice-plan-10/",
        sections: [
          { heading: "Warm Up", drills: ["2-Foot Hop"] },
          { heading: "Ball Handling", drills: ["Toss And Catch Drill (adds a clap, 2, 3, turn)", "Low Dribble Drill (add numbers)", "Middle Dribble Drill (add numbers)", "High Dribble Drill (add number)", "The Zig Zag Drill", "Dribble Knockout"] },
          { heading: "Passing", drills: ["Partner Running Pass Drill"] },
          { heading: "Shooting", drills: ["2-Bounce Shooting Game"] },
          { heading: "Footwork and Conditioning", drills: ["On The Whistle Jump Stop Drill", "Tuck Back Drill"] },
          { heading: "Team Concepts", drills: ["Tracing The Ball Breakdown Drill"] },
          { heading: "Competing", drills: ["On The Block Finish Drill", "Elbows Finish Drill", "Compliment Session"] },
        ],
      },
      {
        id: 11,
        title: "Starter Practice Plan 11",
        url: "https://elevationathletics.ca/starter-practice-plan-11/",
        sections: [
          { heading: "Warm Up", drills: ["Dynamic Warmup | Fun Youth Basketball Drills from the Jr. NBA available in the MOJO App"] },
          { heading: "Ball Handling", drills: ["Figure 8 Fingertips Drill", "Front To Back Dribble Drill", "3-3-3 Dribble Drill", "Dribble Balance & Push Drill", "Running Dribble Drill (does R/L/Crossover)"] },
          { heading: "Passing", drills: ["Open & Decide Drill"] },
          { heading: "Shooting", drills: ["1-Step Form Shooting", "Layup Skip Drill"] },
          { heading: "Rebounding", drills: ["3-Second Box Out Drill"] },
          { heading: "Team Concepts", drills: ["Pass & Cut Drill", "Reverse The Ball Drill"] },
          { heading: "Competing", drills: ["3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 12,
        title: "Starter Practice Plan 12",
        url: "https://elevationathletics.ca/starter-practice-plan-12/",
        sections: [
          { heading: "Warm Up", drills: ["Run To That Line Drill"] },
          { heading: "Ball Handling", drills: ["Finger Dribble Drill", "5-5-5 Creative Dribble Drill", "Running Dribble Drill (does R/L/Crossover)"] },
          { heading: "Passing", drills: ["Who Is Ready Drill", "Jump Stop, Pivot, & Pass Drill", "Dribble & Pass To A Target Drill", "Dribble, Jump Stop, & Pass Drill"] },
          { heading: "Shooting", drills: ["Loop Shooting Drill", "Jump Stop Shooting Drill"] },
          { heading: "Rebounding", drills: ["Self-Toss Rebounding Drill"] },
          { heading: "Competing", drills: ["2 on 2 Numbers Game", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
    ],
  },
  {
    id: "allstar",
    name: "All-Star",
    shortName: "All-Star",
    color: "#2196F3",
    bgColor: "#E3F2FD",
    description: "Intermediate level. Complex ball handling, screen plays, and advanced team concepts.",
    skillsPdfUrl: "https://elevationathletics.ca/wp-content/uploads/2024/04/ALL-STAR.pdf",
    sessions: [
      {
        id: 1,
        title: "All-Star Practice Plan 1",
        url: "https://elevationathletics.ca/all-star-practice-plan-1/",
        sections: [
          { heading: "Warm Up", drills: ["Fundamentals Of Warming-Up", "Forward & Backward Run", "Explosion Leaps"] },
          { heading: "Ball Handling", drills: ["Cone Dribbling Drill", "Between The Legs Challenge", "Scissors Dribble Drill", "2-Ball Low-High Drill"] },
          { heading: "Passing", drills: ["Stationary Partner Passing Drill", "Jump Stop, Pivot, & Pass Drill"] },
          { heading: "Shooting", drills: ["The Shot Fake 1-Dribble Pull-Up Drill"] },
          { heading: "Team Concepts", drills: ["3-Person Pass, Cut, & Replace", "Fundamentals Of The Screen"] },
          { heading: "Competing", drills: ["2 On 2 - Cones", "3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 2,
        title: "All-Star Practice Plan 2",
        url: "https://elevationathletics.ca/all-star-practice-plan-2/",
        sections: [
          { heading: "Warm Up", drills: ["Ankling", "Carioca", "Pogo Jumps", "The Bear Hold"] },
          { heading: "Ball Handling", drills: ["Behind The Back Wrap Breakdown Drill", "Behind The Back Wrap Drill", "2-Ball Low-High Drill"] },
          { heading: "Passing", drills: ["Partner Running Pass Drill"] },
          { heading: "Shooting", drills: ["Progression Shooting Competition", "Shooting Line Game"] },
          { heading: "Team Concepts", drills: ["3-Second Deny Drill", "The Jump To The Ball Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 3,
        title: "All-Star Practice Plan 3",
        url: "https://elevationathletics.ca/all-star-practice-plan-3/",
        sections: [
          { heading: "Cultivating Values & Developing Wellness", drills: ["Leadership"] },
          { heading: "Warm Up", drills: ["Split Squat Hold", "Bent Knee Side Plank", "Forward Walking Lunge", "Stationary A-Skip"] },
          { heading: "Ball Handling", drills: ["Stationary 1-2 Behind The Back Drill", "Behind The Back Challenge"] },
          { heading: "Passing", drills: ["Pound & Pass Drill", "Stationary 2-Ball Passing Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of Filling The Corner", "Filling The Corner Drill", "Fundamentals Of Help The Helper", "Shell Drill 3-On-3"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 4,
        title: "All-Star Practice Plan 4",
        url: "https://elevationathletics.ca/all-star-practice-plan-4/",
        sections: [
          { heading: "Warm Up", drills: ["Lateral Squat Hold"] },
          { heading: "Ball Handling", drills: ["Fundamentals Of The Pull-Back Dribble", "Pull-Back Dribble Breakdown Drill"] },
          { heading: "Shooting", drills: ["1-Step Form Shooting", "Fundamentals Of The V-Cut", "V-Cut Breakdown Drill", "V-Cut Layup Drill", "Pass & Up & Under Drill"] },
          { heading: "Rebounding", drills: ["Fundamentals Of Tag & Pursue", "Tag & Pursue Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of The Drive & Kick", "Fundamentals Of The Backdoor Pass", "The Backdoor Pass Breakdown Drill", "Backdoor Pass Layup Drill", "Post Pass & Screen", "Post Pass & Relocate Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 5,
        title: "All-Star Practice Plan 5",
        url: "https://elevationathletics.ca/all-star-practice-plan-5/",
        sections: [
          { heading: "Ball Handling", drills: ["Stationary 2-Ball 1.2. Cross Drill", "Between Cross Behind Dribble Drill", "Fundamentals Of The Between Cross Dribble", "Between Cross Breakdown Drill"] },
          { heading: "Footwork & Conditioning", drills: ["Backdoor Cut Layup Drill", "Fundamentals Of The Backdoor Cut"] },
          { heading: "Rebounding", drills: ["Tag & Pursue Drill"] },
          { heading: "Team Concepts", drills: ["2 on 2 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 6,
        title: "All-Star Practice Plan 6",
        url: "https://elevationathletics.ca/all-star-practice-plan-6/",
        sections: [
          { heading: "Cultivating Values & Developing Wellness", drills: ["Playing Positions"] },
          { heading: "Warm Up", drills: ["Hip Hinge"] },
          { heading: "Ball Handling", drills: ["Creative Cone Dribble Drill"] },
          { heading: "Shooting", drills: ["Loop Shooting Drill"] },
          { heading: "Team Concepts", drills: ["Chase Layup Drill", "1 on 1 Cones", "1 On 1 Dribble Out", "Compliment Session"] },
        ],
      },
      {
        id: 7,
        title: "All-Star Practice Plan 7",
        url: "https://elevationathletics.ca/all-star-practice-plan-7/",
        sections: [
          { heading: "Warm Up", drills: ["Forward & Backward Run"] },
          { heading: "Ball Handling", drills: ["Side-To-Side & Between Dribble Drill", "Fundamentals Of The In & Out Crossover", "In & Out Crossover Breakdown Drill", "Behind The Back Wrap Breakdown Drill", "The Foot Between Drill"] },
          { heading: "Passing", drills: ["Fundamentals Of The Shovel Pass", "The Shovel Pass Breakdown Drill", "The Shovel Pass Drill"] },
          { heading: "Shooting", drills: ["Catch, Turn, & Shoot Drill"] },
          { heading: "Offense", drills: ["Using A Screen Shooting Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of The Out Cut", "The Out Cut & Shot Drill", "3-Touch Defensive Drill"] },
          { heading: "Competing", drills: ["3 on 3 Numbers Game", "Compliment Session"] },
        ],
      },
      {
        id: 8,
        title: "All-Star Practice Plan 8",
        url: "https://elevationathletics.ca/all-star-practice-plan-8/",
        sections: [
          { heading: "Cultivating Values & Developing Wellness", drills: ["Rest"] },
          { heading: "Ball Handling", drills: ["Moving Between The Legs Drill"] },
          { heading: "Passing", drills: ["Pound & Pass Drill", "Star Passing Drill", "Post Pass & Cut Drill"] },
          { heading: "Shooting", drills: ["Spin Step-In Drill", "Shooting Line Game"] },
          { heading: "Team Concepts", drills: ["Motion 4 On 0 Screen Away & Cut"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 9,
        title: "All-Star Practice Plan 9",
        url: "https://elevationathletics.ca/all-star-practice-plan-9/",
        sections: [
          { heading: "Warm Up", drills: ["Partner Running Pass Drill"] },
          { heading: "Ball Handling", drills: ["3-2-1 In & Out Dribble Drill"] },
          { heading: "Competitive Drills", drills: ["Make For A Cone Game"] },
          { heading: "Shooting", drills: ["Fundamentals Of The Post Up"] },
          { heading: "Offense", drills: ["Pass & Drop-Step Drill"] },
          { heading: "Footwork & Conditioning", drills: ["Explosion Leaps"] },
          { heading: "Competing", drills: ["2 On 2 - Cones", "Compliment Session"] },
        ],
      },
      {
        id: 10,
        title: "All-Star Practice Plan 10",
        url: "https://elevationathletics.ca/all-star-practice-plan-10/",
        sections: [
          { heading: "Warm Up", drills: ["Carioca", "Pogo Jumps", "The Bear Hold", "Walking Kicks"] },
          { heading: "Ball Handling", drills: ["Stationary 1-2 Behind The Back Drill", "Behind The Back Challenge"] },
          { heading: "Shooting", drills: ["1-Step Form Shooting", "V-Cut Layup Drill", "Pass & Up & Under Drill"] },
          { heading: "Offense", drills: ["Backdoor Pass Layup Drill"] },
          { heading: "Team Concepts", drills: ["The Defensive Mirror Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 11,
        title: "All-Star Practice Plan 11",
        url: "https://elevationathletics.ca/all-star-practice-plan-11/",
        sections: [
          { heading: "Warm Up", drills: ["Forward & Backward Run", "Explosion Leaps"] },
          { heading: "Ball Handling", drills: ["Pull-Back Dribble Breakdown Drill", "3-2-1 In & Out Dribble Drill", "Stationary 2-Ball 1.2. Cross Drill", "Between Cross Behind Dribble Drill"] },
          { heading: "Shooting", drills: ["Fundamentals Of The Curl Cut"] },
          { heading: "Passing", drills: ["Pound Between & Pass Drill", "Stationary 2-Ball Passing Drill"] },
          { heading: "Rebounding", drills: ["Tag & Pursue Drill"] },
          { heading: "Team Concepts", drills: ["Baseline Drive Same Side Post Shooting Competition"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 12,
        title: "All-Star Practice Plan 12",
        url: "https://elevationathletics.ca/all-star-practice-plan-12/",
        sections: [
          { heading: "Ball Handling", drills: ["Creative Cone Dribble Drill", "Walking Between The Legs Drill"] },
          { heading: "Shooting", drills: ["Loop Shooting Drill"] },
          { heading: "Team Concepts", drills: ["Fundamentals Of Denying The Pass", "3-Second Deny Drill", "Fundamentals Of Jumping To The Ball", "The Jump To The Ball Drill", "Shell Drill 2-On-2"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
    ],
  },
  {
    id: "mvp",
    name: "MVP",
    shortName: "MVP",
    color: "#9C27B0",
    bgColor: "#F3E5F5",
    description: "Advanced level. High-level team systems, specialized moves, and elite conditioning.",
    skillsPdfUrl: "https://elevationathletics.ca/wp-content/uploads/2024/04/MVP.pdf",
    sessions: [
      {
        id: 1,
        title: "MVP Practice Plan 1",
        url: "https://elevationathletics.ca/mvp-practice-plan-1/",
        sections: [
          { heading: "Warm Up", drills: ["Fundamentals Of Warming-Up"] },
          { heading: "Ball Handling", drills: ["Cone Dribbling Drill", "Contact Dribble"] },
          { heading: "Passing", drills: ["Pound & Pass Drill"] },
          { heading: "Team Concepts", drills: ["1 On 1 - 3 Stops"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 2,
        title: "MVP Practice Plan 2",
        url: "https://elevationathletics.ca/mvp-practice-plan-2/",
        sections: [
          { heading: "Team Concepts", drills: ["Fundamentals Of Stunt & Recover"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 3,
        title: "MVP Practice Plan 3",
        url: "https://elevationathletics.ca/mvp-practice-plan-3/",
        sections: [
          { heading: "Warm Up", drills: ["Stationary A-Skip", "Carioca", "Pogo Jumps", "The Bear Hold"] },
          { heading: "Ball Handling", drills: ["2-Ball Jab Drill", "2-Ball Alternate & React Drill"] },
          { heading: "Shooting", drills: ["Loop Shooting Drill"] },
          { heading: "Offense", drills: ["Filling The Corner Drill"] },
          { heading: "Team Concepts", drills: ["5 On 0 Fast Break", "Follow The Leader Slides Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 4,
        title: "MVP Practice Plan 4",
        url: "https://elevationathletics.ca/mvp-practice-plan-4/",
        sections: [
          { heading: "Warm Up", drills: ["Forward & Backward Run"] },
          { heading: "Offense", drills: ["Backdoor Pass Layup Drill"] },
          { heading: "Shooting", drills: ["Using A Screen Shooting Drill"] },
          { heading: "Rebounding", drills: ["Tag & Pursue Drill"] },
          { heading: "Team Concepts", drills: ["Follow The Leader Slides Drill", "Ball Up Ball Down Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 5,
        title: "MVP Practice Plan 5",
        url: "https://elevationathletics.ca/mvp-practice-plan-5/",
        sections: [
          { heading: "Passing", drills: ['The Fundamentals Of "If Fronted, Flash"', "Fundamentals Of The High Low Pass", "High Low Passing Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 6,
        title: "MVP Practice Plan 6",
        url: "https://elevationathletics.ca/mvp-practice-plan-6/",
        sections: [
          { heading: "Ball Handling", drills: ["Between Cross Behind Dribble Drill"] },
          { heading: "Shooting", drills: ["In & Out Crossover & Shoot Drill"] },
          { heading: "Team Concepts", drills: ["Defending The 2-On-1 Drill", "Drive & Kick Competition"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 7,
        title: "MVP Practice Plan 7",
        url: "https://elevationathletics.ca/mvp-practice-plan-7/",
        sections: [
          { heading: "Cultivating Values & Developing Wellness", drills: ["Healthy Relationships"] },
          { heading: "Ball Handling", drills: ["The Zig Zag Drill"] },
          { heading: "Footwork & Conditioning", drills: ["The Jab & Attack Drill", "Closeout, Slide, & Backpedal Drill"] },
          { heading: "Competing", drills: ["1 on 1 Cones", "Compliment Session"] },
        ],
      },
      {
        id: 8,
        title: "MVP Practice Plan 8",
        url: "https://elevationathletics.ca/mvp-practice-plan-8/",
        sections: [
          { heading: "Passing", drills: ["Partner Running Pass Drill"] },
          { heading: "Shooting", drills: ["1-Step Form Shooting"] },
          { heading: "Team Concepts", drills: ["Digging in the Post"] },
          { heading: "Competing", drills: ["Around The World", "Compliment Session"] },
        ],
      },
      {
        id: 9,
        title: "MVP Practice Plan 9",
        url: "https://elevationathletics.ca/mvp-practice-plan-9/",
        sections: [
          { heading: "Cultivating Values & Developing Wellness", drills: ["Leadership"] },
          { heading: "Warm Up", drills: ["The Walking Quad Stretch", "Ankling", "Carioca", "Pogo Jumps", "The Bear Hold"] },
          { heading: "Shooting", drills: ["Pass & Up & Under Drill"] },
          { heading: "Team Concepts", drills: ["Filling The Corner Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
      {
        id: 10,
        title: "MVP Practice Plan 10",
        url: "https://elevationathletics.ca/mvp-practice-plan-10/",
        sections: [
          { heading: "Warm Up", drills: ["Stand To Athletic Positioning", "Bent Knee Side Plank", "Forward Walking Lunge", "Split Squat Hold", "Stationary A-Skip", "Walking Kicks"] },
          { heading: "Ball Handling", drills: ["Over The Line Dribble Drill", "In & Out Overs Drill", "Cone Dribbling Drill"] },
          { heading: "Team Concepts", drills: ["3-Second Deny Drill", "The Deny Layup Drill", "1 On 1 - 3 Stops"] },
          { heading: "Competing", drills: ["1 On 1 Dribble Out", "Compliment Session"] },
        ],
      },
      {
        id: 11,
        title: "MVP Practice Plan 11",
        url: "https://elevationathletics.ca/mvp-practice-plan-11/",
        sections: [
          // Page not found on source website
        ],
      },
      {
        id: 12,
        title: "MVP Practice Plan 12",
        url: "https://elevationathletics.ca/mvp-practice-plan-12/",
        sections: [
          { heading: "Warm Up", drills: ["Vertical Jump To Stick", "Quick Feet", "2-Foot Hop", "Lateral Squat Hold", "Knee Hugs", "The Walking Hamstring Stretch"] },
          { heading: "Ball Handling", drills: ["The Figure 8 Dribble 4 Drill", "1-Ball Pound 1-Ball Control Drill"] },
          { heading: "Shooting", drills: ["Jump Through The Hips & Finish Drill", "4-5-4 Drop-Step Drill"] },
          { heading: "Team Concepts", drills: ["Post Pass Shooting Drill"] },
          { heading: "Competing", drills: ["Compliment Session"] },
        ],
      },
    ],
  },
];

export function getLevel(id: string): Level | undefined {
  return CURRICULUM.find((l) => l.id === id);
}

export function getSession(levelId: string, sessionId: number): Session | undefined {
  return getLevel(levelId)?.sessions.find((s) => s.id === sessionId);
}
