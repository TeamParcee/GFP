import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrillsService {

  constructor(
  ) { }




  public drillData = [
    {
      "Position": "All Player Skills",
      "Drill": "Breakdown Position",
      "Video": "https://planner.usafootball.com/uploads/drill/file/920/breakdownPosition.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Catching At or Above the Numbers",
      "Video": "https://planner.usafootball.com/uploads/drill/file/921/catchingAtOrAboveTheNumbers.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Catching Below the Numbers",
      "Video": "https://planner.usafootball.com/uploads/drill/file/922/catchingBelowTheNumbers.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Fumble Recovery- Ground",
      "Video": "https://planner.usafootball.com/uploads/drill/file/923/fumbleRecoveryOnTheGround.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Catching in Front or Behind the Body",
      "Video": "https://planner.usafootball.com/uploads/drill/file/924/catchingInFrontOfOrBehind.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Catching Over the Shoulder",
      "Video": "https://planner.usafootball.com/uploads/drill/file/925/catchingOverTheShoulder.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Fumble Recovery - Scoop and Score",
      "Video": "https://planner.usafootball.com/uploads/drill/file/926/fumbleRecovery-ScoopAndScore.mp4"
    },
    {
      "Position": "All Player Skills",
      "Drill": "Stripping the Ball",
      "Video": "https://planner.usafootball.com/uploads/drill/file/927/strippingTheBall.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Angle Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1056/angleTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Bags 1- Shuffle & Fill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1057/Bags-1-shuffleAndFill.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Bags 2- Choose A Hole",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1058/Bags-2-chooseAHole.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Bags 3- Downhill Bag Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1059/Bags-3-downhillBagTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Bags 4- Movement Skills",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1060/Bags-4-movementSkills.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Box- Open Field Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1061/box-openFieldTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Breakdown",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1062/breakdown.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Buzz",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1063/buzz.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Finish Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1064/finishTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Freeze Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1065/freezeTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Grapple tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1066/grappleTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Hit",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1067/hit.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Lanes Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1068/lanesTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Leverage Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1069/leverageTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "One Foot Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1070/oneFootTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Pop Up Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1071/popUpTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Rip",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1072/rip.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Shoot",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1073/shoot.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Step Over Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1074/stepOverTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Straight on Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1075/straightOnTackle.mp4"
    },
    {
      "Position": "Heads Up Tackling",
      "Drill": "Three Rips",
      "Video": "https://planner.usafootball.com/uploads/drill/file/1076/threeRips.mp4"
    },
    {
      "Position": "Speed",
      "Drill": "Accelerate",
      "Video": "https://planner.usafootball.com/uploads/drill/file/929/accelerate.mp4"
    },
    {
      "Position": "Speed",
      "Drill": "Burst",
      "Video": "https://planner.usafootball.com/uploads/drill/file/930/burst.mp4"
    },
    {
      "Position": "Speed",
      "Drill": "Double Curve Sprint",
      "Video": "https://planner.usafootball.com/uploads/drill/file/931/doubleCurveSprint.mp4"
    },
    {
      "Position": "Speed",
      "Drill": "Quick Plant",
      "Video": "https://planner.usafootball.com/uploads/drill/file/932/quickPlant.mp4"
    },
    {
      "Position": "Speed",
      "Drill": "Speed Weave",
      "Video": "https://planner.usafootball.com/uploads/drill/file/933/speedWeave.mp4"
    },
    {
      "Position": "Team Drills",
      "Drill": "Half-Line Strong Side",
      "Video": "https://planner.usafootball.com/uploads/drill/file/934/halfLineStrongSide.mp4"
    },
    {
      "Position": "Team Drills",
      "Drill": "Half-Line Weak Side",
      "Video": "https://planner.usafootball.com/uploads/drill/file/935/halfLineWeakSide.mp4"
    },
    {
      "Position": "Team Drills",
      "Drill": "Interception Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/936/interceptionDrill.mp4"
    },
    {
      "Position": "Team Drills",
      "Drill": "Kickoff Lanes",
      "Video": "https://planner.usafootball.com/uploads/drill/file/937/kickoffLanes.mp4"
    },
    {
      "Position": "Team Drills",
      "Drill": "Punt Lanes",
      "Video": "https://planner.usafootball.com/uploads/drill/file/938/puntLanes.mp4"
    },
    {
      "Position": "Team Drills",
      "Drill": "Team Pursuit",
      "Video": "https://planner.usafootball.com/uploads/drill/file/939/teamPursuit.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Agility Ladder",
      "Video": "https://planner.usafootball.com/uploads/drill/file/940/agilityLadder.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Back Kicks",
      "Video": "https://planner.usafootball.com/uploads/drill/file/941/backKicks.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Backpedal",
      "Video": "https://planner.usafootball.com/uploads/drill/file/942/backPedal.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Carioca",
      "Video": "https://planner.usafootball.com/uploads/drill/file/943/carioca.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "First Step",
      "Video": "https://planner.usafootball.com/uploads/drill/file/944/firstStep.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Four Corners",
      "Video": "https://planner.usafootball.com/uploads/drill/file/945/fourCorners.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "High Knees",
      "Video": "https://planner.usafootball.com/uploads/drill/file/946/highKnees.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Jumping Jacks",
      "Video": "https://planner.usafootball.com/uploads/drill/file/947/jumpingJacks.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Leg Kicks",
      "Video": "https://planner.usafootball.com/uploads/drill/file/948/legKicks.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Locomotive Run",
      "Video": "https://planner.usafootball.com/uploads/drill/file/949/locomotiveRun.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Monster Walks",
      "Video": "https://planner.usafootball.com/uploads/drill/file/950/monsterWalks.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Running Ropes or Tires",
      "Video": "https://planner.usafootball.com/uploads/drill/file/951/runningRopesOrTires.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Shuffle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/952/shuffle.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Step Over",
      "Video": "https://planner.usafootball.com/uploads/drill/file/953/stepOver.mp4"
    },
    {
      "Position": "Warm up",
      "Drill": "Wave Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/954/waveDrill.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Angle Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/839/Angle_Blocks.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Center Snap",
      "Video": "https://planner.usafootball.com/uploads/drill/file/840/Center_Snap.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Stance & Start- Chutes",
      "Video": "https://planner.usafootball.com/uploads/drill/file/841/Chutes_Drill.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Combination Blocking",
      "Video": "https://planner.usafootball.com/uploads/drill/file/842/Combination_Block_110623_01.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Cross Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/843/Cross_Block_110623_01.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Double Team Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/844/Double_Team_Block_110623_01.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Drive Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/845/Drive_Block.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Pass Blocking- Duck Walk Shuffle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/846/Duck_Walk_Shuffle.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Pass Blocking- Duck Walk",
      "Video": "https://planner.usafootball.com/uploads/drill/file/847/Duck_Walk.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Drive Block- Effort",
      "Video": "https://planner.usafootball.com/uploads/drill/file/848/Effort_Drill.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Stance & Start- Explosion",
      "Video": "https://planner.usafootball.com/uploads/drill/file/849/Explosion_Drill.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Hook Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/850/Hook_Block_110623_01.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Pass Blocking -Mirror",
      "Video": "https://planner.usafootball.com/uploads/drill/file/851/Mirror_Drill.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/852/Offensive_Lineman_Stance.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Drive Block- One Man Sled",
      "Video": "https://planner.usafootball.com/uploads/drill/file/853/One_Man_Sled.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Combination Blocking -Pass Protection",
      "Video": "https://planner.usafootball.com/uploads/drill/file/854/Pass_Protection.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Combination Blocking- Protect the Cone",
      "Video": "https://planner.usafootball.com/uploads/drill/file/855/Protect_the_Cone.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Pulling to Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/856/Pulling_to_Block_110623_01.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Screen Pass Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/857/Screen_Pass_Block_110623_01.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Trap Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/858/Trap_Block.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Combination Blocking- Zone Menu",
      "Video": "https://planner.usafootball.com/uploads/drill/file/859/Zone_Menu_Drill.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Beginning Pass Protection",
      "Video": "https://planner.usafootball.com/uploads/drill/file/955/beginningPassProtection.mp4"
    },
    {
      "Position": "Offensive Line",
      "Drill": "Shotgun Dead Snap",
      "Video": "https://planner.usafootball.com/uploads/drill/file/956/shotgunDeadSnap.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Medium Route- Flash Passing",
      "Video": "https://planner.usafootball.com/uploads/drill/file/860/Flash_Passing.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Grip & Motion",
      "Video": "https://planner.usafootball.com/uploads/drill/file/861/Grip_and_Throwing_Motion.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Inside Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/862/Inside_Handoff.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Movement Passing- Pocket Slide",
      "Video": "https://planner.usafootball.com/uploads/drill/file/863/Pocket_Slide.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "5 Step Drop from Shotgun",
      "Video": "https://planner.usafootball.com/uploads/drill/file/864/PPDM_Drills_QB_5_Step_Drop_From_The_Gun.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Bootleg Movement",
      "Video": "https://planner.usafootball.com/uploads/drill/file/865/PPDM_Drills_QB_Bootleg_Movement.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Executing the Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/866/PPDM_Drills_QB_Executing_the_Screen_Pass.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Pitching and Tossing the Football",
      "Video": "https://planner.usafootball.com/uploads/drill/file/867/PPDM_Drills_QB_Pitching_and_Tossing_the_Football.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Play Action Pass Fake",
      "Video": "https://planner.usafootball.com/uploads/drill/file/868/PPDM_Drills_QB_Play_Action_Pass_Fake.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Roll Out Passing",
      "Video": "https://planner.usafootball.com/uploads/drill/file/869/PPDM_Drills_QB_Roll_Out_Passing.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Shotgun Dead Snap",
      "Video": "https://planner.usafootball.com/uploads/drill/file/870/PPDM_Drills_QB_Shotgun_Dead_Snap_Drill.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Shotgun Sweep Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/871/PPDM_Drills_QB_Shotgun_Sweep_Handoff.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Wide Receiver Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/872/PPDM_Drills_QB_Wide_Receiver_Screen_Pass.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Stance & Snap",
      "Video": "https://planner.usafootball.com/uploads/drill/file/873/Quarterback_Stance_and_Snap.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Movement Passing- Step Over & Throw",
      "Video": "https://planner.usafootball.com/uploads/drill/file/874/Step_Over_and_Throw.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Sweep Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/875/Sweep_Handoff.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "3-Step Passing",
      "Video": "https://planner.usafootball.com/uploads/drill/file/876/Three_Step_Passing.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Passing Mechanics- Tire Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/877/Tire_Drill.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Movement Passing-  Weave Passing",
      "Video": "https://planner.usafootball.com/uploads/drill/file/878/Weave_Passing.mp4"
    },
    {
      "Position": "Quarterback",
      "Drill": "Wrong Foot Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/957/Wrong_Foot_Pass.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "2-Pt Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/879/2-Pt_Stance.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "3-Pt Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/880/3-Pt_Stance.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "4x Cone",
      "Video": "https://planner.usafootball.com/uploads/drill/file/881/4x_Cone.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Inside Pass Protection- Blitz Pick Up",
      "Video": "https://planner.usafootball.com/uploads/drill/file/882/Blitz_Pickup.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Dip and Accelerate",
      "Video": "https://planner.usafootball.com/uploads/drill/file/883/Dip_and_Accelerate.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "The Guantlet",
      "Video": "https://planner.usafootball.com/uploads/drill/file/884/Guantlet.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Hands Down & Spin",
      "Video": "https://planner.usafootball.com/uploads/drill/file/885/Hand_Down_and_Spin.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Hand Down Bag",
      "Video": "https://planner.usafootball.com/uploads/drill/file/886/Hand_Down_Bag.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Jump Cut and React",
      "Video": "https://planner.usafootball.com/uploads/drill/file/887/Jump_Cut_and_React.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Directional Steps",
      "Video": "https://planner.usafootball.com/uploads/drill/file/888/PPDM_Drills_RB_Directional_Steps.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Wide or Sweep Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/889/PPDM_Drills_RB_Wide__Sweep__Handoff.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Screen Pass- Seek the Passing Lane",
      "Video": "https://planner.usafootball.com/uploads/drill/file/890/Seek_the_Passing_Lane.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Shake & Bake",
      "Video": "https://planner.usafootball.com/uploads/drill/file/891/Shake_and_Bake.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Sprint Plant and Cut",
      "Video": "https://planner.usafootball.com/uploads/drill/file/892/Sprint_Plant_and_Cut.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Taking a Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/893/Taking_a_Handoff.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Angle Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/958/angleHandoff.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Lead Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/959/leadBlock.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Receiving a Toss or Pitch",
      "Video": "https://planner.usafootball.com/uploads/drill/file/960/pitchingAndTossingFootball.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Outside Pass Protection",
      "Video": "https://planner.usafootball.com/uploads/drill/file/961/outsidePassProtection.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Stalk & Block Mirror",
      "Video": "https://planner.usafootball.com/uploads/drill/file/962/stalkAndBlockMirror.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Sweep Handoff From Shot Gun",
      "Video": "https://planner.usafootball.com/uploads/drill/file/963/shotgunSweepHandoff.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Angle Wide Flat",
      "Video": "https://planner.usafootball.com/uploads/drill/file/964/shortRoutesAngleWideFlat.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Faking a Handoff",
      "Video": "https://planner.usafootball.com/uploads/drill/file/965/playActionPassFake.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Inside Pass Protection",
      "Video": "https://planner.usafootball.com/uploads/drill/file/966/insidePassProtection.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Medium Pass Routes- Cross & Stop",
      "Video": "https://planner.usafootball.com/uploads/drill/file/967/mediumPassRoutesCrossAndStop.mp4"
    },
    {
      "Position": "Running Back",
      "Drill": "Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/968/wideReceiverScreenPass.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "5-Yard Turn",
      "Video": "https://planner.usafootball.com/uploads/drill/file/906/5-Yard_Turn.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Car Wash Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/907/Car_Wash_Drill.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Concentration",
      "Video": "https://planner.usafootball.com/uploads/drill/file/908/Concentration.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Curl and Comeback",
      "Video": "https://planner.usafootball.com/uploads/drill/file/909/Curl_and_Comeback.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Hands Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/910/Hands_Drill.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Medium Routes- Highlight Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/911/Highlight_Drill.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Medium Routes- Pass Gauntlet",
      "Video": "https://planner.usafootball.com/uploads/drill/file/912/Pass_Gauntlet.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Deep-Up, Post ,Corner",
      "Video": "https://planner.usafootball.com/uploads/drill/file/913/PPDM_Drills_WR_Deep-_Up__Post__Corner.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Go Seam Route",
      "Video": "https://planner.usafootball.com/uploads/drill/file/914/PPDM_Drills_WR_Go_Seam_Route.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Hook in Out Cross Center",
      "Video": "https://planner.usafootball.com/uploads/drill/file/915/PPDM_Drills_WR_Hook-In-Out-Cross-Center.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Press Coverages",
      "Video": "https://planner.usafootball.com/uploads/drill/file/916/PPDM_Drills_WR_Press_Coverage.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Short Routes- Drag, Quick, Out",
      "Video": "https://planner.usafootball.com/uploads/drill/file/917/PPDM_Drills_WR_Short_Routes-_Drag__Quick__Out.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Stalk Ladder",
      "Video": "https://planner.usafootball.com/uploads/drill/file/918/Stalk_Ladder.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Wide Receiver Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/919/Wide_Receiver_Stance.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Hit, Slant, Look-In, Fan Routes",
      "Video": "https://planner.usafootball.com/uploads/drill/file/969/hitchSlantLookInFanRoutes.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Press Release",
      "Video": "https://planner.usafootball.com/uploads/drill/file/970/ppdm_drills_wr_press_coverage_0_4043.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Running a Reverse",
      "Video": "https://planner.usafootball.com/uploads/drill/file/971/runningAReverse.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/972/wideReceiverScreenPass.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Deep Up Post Corner",
      "Video": "https://planner.usafootball.com/uploads/drill/file/973/DeepUpPostCorner.mp4"
    },
    {
      "Position": "Receivers",
      "Drill": "Hook In Out Cross Center",
      "Video": "https://planner.usafootball.com/uploads/drill/file/974/HookInOutCrossCenter.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "2 Man Sled & Cone",
      "Video": "https://planner.usafootball.com/uploads/drill/file/807/2_Man_Sled_and_Cone.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Bull Rush",
      "Video": "https://planner.usafootball.com/uploads/drill/file/808/Bull_Rush.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Chase to the Whistle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/809/Chase_to_the_Whistle.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Cross Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/810/Defeating_a_Cross_Block_110623_01.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Double Team Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/811/Defeating_a_Double_Team_Block_110623_01.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defensive Line Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/812/Defensive_Line_Stance.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Flat Step",
      "Video": "https://planner.usafootball.com/uploads/drill/file/813/Flat_Step.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Get Offs",
      "Video": "https://planner.usafootball.com/uploads/drill/file/814/Get_Offs.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Loop & Slant",
      "Video": "https://planner.usafootball.com/uploads/drill/file/815/Loop_and_Slant_110623_01.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Recognizing the Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/816/Recognizing_the_Screen_pass_110623_01.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/975/stance.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Get Offs",
      "Video": "https://planner.usafootball.com/uploads/drill/file/976/getOffs.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "2 Man sled & Cone",
      "Video": "https://planner.usafootball.com/uploads/drill/file/977/2ManSledAndCone.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Drive Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/978/defeatingADriveBlock.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Bull Rush",
      "Video": "https://planner.usafootball.com/uploads/drill/file/979/bullRush.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Double Team Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/980/defeatingADoubleTeamBlock.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating an Angle Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/981/defeatingAngleBlock.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Slant Stunt- Flat Step",
      "Video": "https://planner.usafootball.com/uploads/drill/file/982/flatStep.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Loop Stunt/Slant Stunt",
      "Video": "https://planner.usafootball.com/uploads/drill/file/983/loopStuntSlantStunt.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Cross Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/984/defeatingACrossBlock.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Hook Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/985/defeatingAHookBlock.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Rip & Rush Rrun",
      "Video": "https://planner.usafootball.com/uploads/drill/file/986/ripAndRush.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Defeating a Combination Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/987/defeatingAComboBlock.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Arm Over Rush",
      "Video": "https://planner.usafootball.com/uploads/drill/file/988/armOverRush.mp4"
    },
    {
      "Position": "Defensive Line",
      "Drill": "Recognizing & Reacting to the Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/989/recognizingAndReactingToScreenPass.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Downhill Shuffle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/817/Downhill_Shuffle.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Eye Opener",
      "Video": "https://planner.usafootball.com/uploads/drill/file/818/Eye_Opener.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Hit & Shed Progression",
      "Video": "https://planner.usafootball.com/uploads/drill/file/819/Hit_and_Shed_Progression.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Inside Linebacker Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/820/Inside_Linebacker_Stance.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Mirror Dodge",
      "Video": "https://planner.usafootball.com/uploads/drill/file/821/Mirror_Dodge.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Outside Linebacker Stance - No TE",
      "Video": "https://planner.usafootball.com/uploads/drill/file/822/Outside_Linebacker_Stance_-_No_TE.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Outside Linebacker Stance Over TE",
      "Video": "https://planner.usafootball.com/uploads/drill/file/823/Outside_Linebacker_Stance_Over_TE.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Arm Over Rush",
      "Video": "https://planner.usafootball.com/uploads/drill/file/824/PPDM_Drills_LB__Arm_Over_Rush.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Receiver Focus",
      "Video": "https://planner.usafootball.com/uploads/drill/file/825/PPDM_Drills_LB__Receiver_Focus.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeating a Combo Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/826/PPDM_Drills_LB_Defeating_a_Combo_Block.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeating a Drive Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/827/PPDM_Drills_LB_Defeating_a_Drive_Block.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeating a Hook Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/828/PPDM_Drills_LB_Defeating_a_Hook_Block.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeating the Angle Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/829/PPDM_Drills_LB_Defeating_the_Angle_Block.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeating the Kick Out Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/830/PPDM_Drills_LB_Defeating_the_Kick_Out_Block.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeating the Trap Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/831/PPDM_Drills_LB_Defeating_the_Trap_Block.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Reacting to Screen Pass",
      "Video": "https://planner.usafootball.com/uploads/drill/file/832/PPDM_Drills_LB_Reacting_to_Screen_Pass.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Rip & Rush Technique",
      "Video": "https://planner.usafootball.com/uploads/drill/file/833/PPDM_Drills_LB_Rip_and_Rush_Technique.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "React & Catch",
      "Video": "https://planner.usafootball.com/uploads/drill/file/834/React_and_Catch.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Reaction Square",
      "Video": "https://planner.usafootball.com/uploads/drill/file/835/Reaction_Square.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Defeat Blocks- Shed Drill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/836/Shed.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Sprint Tackle",
      "Video": "https://planner.usafootball.com/uploads/drill/file/837/Sprint_Tackle.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Zone Drop",
      "Video": "https://planner.usafootball.com/uploads/drill/file/838/Zone_Drop.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Gaining Ground Downhill",
      "Video": "https://planner.usafootball.com/uploads/drill/file/990/gainingGroundDownhill.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "Rip & Run Rush",
      "Video": "https://planner.usafootball.com/uploads/drill/file/991/ripAndRush.mp4"
    },
    {
      "Position": "Linebackers",
      "Drill": "2 Player Stunts",
      "Video": "https://planner.usafootball.com/uploads/drill/file/992/2PlayerStunts.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "90 Degrees",
      "Video": "https://planner.usafootball.com/uploads/drill/file/792/90_Degrees.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Bump & Stop",
      "Video": "https://planner.usafootball.com/uploads/drill/file/793/Bump___Stop.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Cornerback Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/794/Cornerback_Stance.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Cushion Break",
      "Video": "https://planner.usafootball.com/uploads/drill/file/795/Cushion_Break.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Free Safety Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/796/Free_Safety_Stance.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Funnel & Cushion",
      "Video": "https://planner.usafootball.com/uploads/drill/file/797/Funnel___Cushion.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Angle Backpedal",
      "Video": "https://planner.usafootball.com/uploads/drill/file/798/PPDM_Drills_DB_Angle_Backpedal.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Backpedal",
      "Video": "https://planner.usafootball.com/uploads/drill/file/799/PPDM_Drills_DB_Backpedal.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Defeating the Stalk Block",
      "Video": "https://planner.usafootball.com/uploads/drill/file/800/PPDM_Drills_DB_Defeating_the_Stalk_Block.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Defending the Screen",
      "Video": "https://planner.usafootball.com/uploads/drill/file/801/PPDM_Drills_DB_Defending_the_Screen.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Read Pass Read Run",
      "Video": "https://planner.usafootball.com/uploads/drill/file/802/Read_Pass_Read_Run.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Strong Safety Stance",
      "Video": "https://planner.usafootball.com/uploads/drill/file/803/Strong_Safety_Stance.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "The Big W",
      "Video": "https://planner.usafootball.com/uploads/drill/file/804/The_Big_W.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Zone Break",
      "Video": "https://planner.usafootball.com/uploads/drill/file/805/Zone_Break.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Zone Drop",
      "Video": "https://planner.usafootball.com/uploads/drill/file/806/Zone_Drop.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Force Point",
      "Video": "https://planner.usafootball.com/uploads/drill/file/928/forcePoint.mp4"
    },
    {
      "Position": "Defensive Backs",
      "Drill": "Maintaining Leverage",
      "Video": "https://planner.usafootball.com/uploads/drill/file/993/maintainingLeverage.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Approach and Kick for Kickoffs",
      "Video": "https://planner.usafootball.com/uploads/drill/file/894/Approach_and_Kick_for_Kickoffs.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Punt Drop & Kick",
      "Video": "https://planner.usafootball.com/uploads/drill/file/895/Drop_and_Kick.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Holder",
      "Video": "https://planner.usafootball.com/uploads/drill/file/896/Holder.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "PAT/FG kicking the ball",
      "Video": "https://planner.usafootball.com/uploads/drill/file/897/Kicking_the_Ball_for_Field_Goals_and_Extra_Points.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Kickoff Return",
      "Video": "https://planner.usafootball.com/uploads/drill/file/898/Kickoff_Return.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Long Snapper",
      "Video": "https://planner.usafootball.com/uploads/drill/file/899/Long_Snapper.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Punt Return",
      "Video": "https://planner.usafootball.com/uploads/drill/file/900/Punt_Return.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Punter Stance and Setup",
      "Video": "https://planner.usafootball.com/uploads/drill/file/901/Punter_Stance___Setup.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Receiving an Onside Kick",
      "Video": "https://planner.usafootball.com/uploads/drill/file/902/Receiving_an_Onside_Kick_110623_01.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Short Snapper",
      "Video": "https://planner.usafootball.com/uploads/drill/file/903/Short_Snapper.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "PAT/FG Stance & Setup",
      "Video": "https://planner.usafootball.com/uploads/drill/file/904/Stance_and_Setup_for_Field_Goals_and_Extra_Points.mp4"
    },
    {
      "Position": "Special Teams",
      "Drill": "Stance and Setup for Kick",
      "Video": "https://planner.usafootball.com/uploads/drill/file/905/Stance_and_Setup_for_Kick.mp4"
    }
  ]
}