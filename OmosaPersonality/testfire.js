import System;
import System.IO;

var gameOver=false;
var windowskin : GUISkin;
var exitskin : GUISkin;
var titleskin : GUISkin;
var helpskin : GUISkin;

var fire : GameObject;
var pillar : GameObject;
var fence: GameObject;
var stick : GameObject;

var flash_region: GameObject;
var region: String="region";
var region1 : GameObject;
var region2 : GameObject;
var region3 : GameObject;
var region4 : GameObject;
var region5 : GameObject;
var region6 : GameObject;
var region7 : GameObject;
var region8 : GameObject;

var fence_direction: GameObject;

/*var r1:GameObject;
var r2:GameObject;
var r3:GameObject;
var r4:GameObject;
var r5:GameObject;
var r6:GameObject;
var r7:GameObject;
var r8:GameObject;*/

// variables to determine the height of region markers

/*var region1_height:float=0;
var region2_height:float=0;
var region3_height:float=0;
var region4_height:float=0;
var region5_height:float=0;
var region6_height:float=0;
var region7_height:float=0;
var region8_height:float=0;*/

//var regions_height= new float[8];
var markers_ary=new GameObject[8];
markers_ary=[region1,region2,region3,region4,region5,region6,region7,region8];

var lowHeight:float=0;
var midHeight:float=0;
var highHeight:float=0;

//
var firstinst:boolean=true;

//var nb1:Material;
//var n1:Material;

var firstClickFlag: boolean= false;
var normalCase: boolean= false;
var nearedge: Vector3= Vector3.zero;
var faredge: Vector3= Vector3.zero;

// the two edge region

var edgez = new int[2];
var edgez_next=new int[2];

/**/
var point1 : Vector3;
var point2 : Vector3;
var point3 : Vector3;
var p1: Vector3;
var middlepoint: Vector3;

var counterclick: int=0;
var countermiddle: int=1;
var str: String;
var separator= Vector3.zero;
var points_ary = new Array (separator);
var vertex= new Array();

var counter : int=0;
var points_ary2: Vector3[];

/**************************************************************/

/*********mouse position*******/
var mousePos : Vector3 = Vector3.zero;
var worldPos : Vector3= Vector3.zero;
/**/

/***************variables of close edge point****************/
var element_ary= new Array();
var Xdiff1: float=0.0;
var Zdiff1: float=0.0;
var totaldiff1 : float=0.0;

var Xdiff2: float=0.0;
var Zdiff2: float=0.0;
var totaldiff2 : float=0.0;

var Xdiff3: float=0.0;
var Zdiff3: float=0.0;
var totaldiff3 : float=0.0;

var Xdiff4: float=0.0;
var Zdiff4: float=0.0;
var totaldiff4 : float=0.0;

var output:String="";
var s:String="";

/***************variables of close edge point to agent****************/
//var which_is_far:boolean=false;

var Xdiff1_agent: float=0.0;
var Zdiff1_agent: float=0.0;
var totaldiff1_agent : float=0.0;

var Xdiff2_agent: float=0.0;
var Zdiff2_agent: float=0.0;
var totaldiff2_agent : float=0.0;

var Xdiff3_agent: float=0.0;
var Zdiff3_agent: float=0.0;
var totaldiff3_agent : float=0.0;

var Xdiff4_agent: float=0.0;
var Zdiff4_agent: float=0.0;
var totaldiff4_agent : float=0.0;

var mouse_region:int=0;

/********************* variable of farthest ***********************/
var farthest_ary= new Array();
var farthest_point:Vector3;


/**********************variables of changing turns*****************************/
var agentTurn: boolean=false;
var closeState=false;
var initialState=false;
var agentPoint1:Vector3;
var agentPoint2:Vector3;
var agentPoint3:Vector3;

var agentCurrentRegion:int=0;

/*****************calling the variables of Yernt position file******************/
var ext_Yernt_position : yerntposition;
var ext_corner1: Vector3;
var ext_corner2: Vector3;
var ext_corner3: Vector3;
var ext_corner4: Vector3;
var ext_vertex= new Array();
/******************************************************************************/

/********************* variables of the four fire extreme**********************/
var fire_big_X:Vector3 = Vector3.zero;
var fire_small_X:Vector3= Vector3.zero;
var fire_big_Z:Vector3= Vector3.zero;
var fire_small_Z:Vector3= Vector3.zero;
/*******************************************************************************/

/********************* variables of the four yernt extreme**********************/
var yernt_big_X:Vector3 = Vector3.zero;
var yernt_small_X:Vector3= Vector3.zero;
var yernt_big_Z:Vector3= Vector3.zero;
var yernt_small_Z:Vector3= Vector3.zero;

var yernt_length: float;
var yernt_width: float;
/********************************************************************************************/

/******************************** line equation variables************************************/
var slope:float=0.0;
var intersection: float=0.0;
var createdPoint:Vector3; // estimated around the cloest
var locatedPoint:Vector3; // from cloest function
/******************************************************************************************/

/************************************ 3'azala variable ***********************************/

var yernt_detected: boolean=false;

/*********************************** REGIONS *******************************************/
var region_point= new Vector3[8];
var marker_point= new Vector3[8];
var path_point= new Vector3[8];
var region_checked= new int[8];
var current_region:int;
var optimal =2;
var normal=1;
/*************************************************************************************/

/*********************************** Dialogue*****************************************/
var dlg_str:String="";

/*********************************** wait highlight*************************************/

var first_hightlight : GameObject;
var second_hightlight : GameObject;
/************************************* Text message ******************************************/

/**********************************************************************************************/

var firyCursor: Texture2D;
var cursor: Texture2D;
var changeCursor: boolean=false;
/******************************************** windows variables**********************************/

var close_flag:boolean=false;
var show_window:boolean=false;
var reason_window:boolean=false;
var request_window: boolean=false;
var reply_window:boolean=false;
var hint_window:boolean=false;
var warning_window:boolean=false;
var repetition_window:boolean=false;
var controls_window:boolean=true;

var reason_content:String;
var window_content:String;
var request_content:String;
var reply_content:String;
var hint_content:String;
var warning_content:String;

var windowRect_alanRequest: Rect;
var windowRect_alanReason: Rect;
var windowRect_humanRequest: Rect;
var windowRect_alanfeedback: Rect;
var windowRect_alanWarning: Rect;
var windowRect_alanRepetition: Rect;
var windowRect_controlswindow:Rect;

var windowRect_alanHint: Rect;

var windowRect_instruct:Rect;
var windowRect4: Rect;
var windowRect5: Rect;
var windowRect6: Rect;

var aTexture = new Texture[8];
//var exitmsg:String="Press Z to exit agent request window \n OR \n Press X to show agent's reason for his request";
var exitmsg :String= "Press X to see agent's reason for his request \n OR \n N to say \"I like this idea\" \n OR \n Y to say \"I do not like this idea\"";
/*************************************** to be written in CVS File****************************************/

var step: int =0;
var human_checked_regions= new Array();  // the region selected by the human, is it the same as reason region or not??
var proposed_regions= new Array();     // the 2 proposed region in the show window, one of them will be in reason window
var reason_region= new Array();       // the one region in reson request of agent
var sequence_regions= new Array();   // the sequence of regions selects by both of them
var reason_button_clicked: boolean=false;
//**********************************************************************************************************/

//********************************************  Match between agent reason and human action *********************/

var feedback_window:boolean=false;
var feedback_content:String="";
//**********************************************************************************************************/
var gameOver_content:String="";
//********************************************** Request Window ********************************************/
var imgalan : Texture;
var n: Texture;
var y: Texture;
var x: Texture;
var z: Texture;

var reasonimg : Texture;
var img1 : Texture;
var img2 : Texture;
var img3 : Texture;
var img4 : Texture;
var img5 : Texture;
var img6 : Texture;
var img7 : Texture;
var img8 : Texture;

var clicked_img1:Texture;
var clicked_img2:Texture;
var clicked_img3:Texture;
var clicked_img4:Texture;
var clicked_img5:Texture;
var clicked_img6:Texture;
var clicked_img7:Texture;
var clicked_img8:Texture;

var empty_img1 : Texture;
var empty_img2 : Texture;
var empty_img3 : Texture;
var empty_img4 : Texture;
var empty_img5 : Texture;
var empty_img6 : Texture;
var empty_img7 : Texture;
var empty_img8 : Texture;

var imgyernt:Texture;
var img_ary : Texture[];
var clicked_img_ary: Texture[];

var human_region1:boolean=false;
var human_region2:boolean=false;
var human_region3:boolean=false;
var human_region4:boolean=false;
var human_region5:boolean=false;
var human_region6:boolean=false;
var human_region7:boolean=false;
var human_region8:boolean=false;

var human_requested_region = new int[8];
human_requested_region=[0,0,0,0,0,0,0,0];

//************************************************** change region marker color ****************************************/

var mouse_img1 : Material;
var mouse_img2 : Material;
var mouse_img3 : Material;
var mouse_img4 : Material;
var mouse_img5 : Material;
var mouse_img6 : Material;
var mouse_img7 : Material;
var mouse_img8 : Material;

var yn1: Material;
var yn2: Material;
var yn3: Material;
var yn4: Material;
var yn5: Material;
var yn6: Material;
var yn7: Material;
var yn8: Material;

var gn1: Material;
var gn2: Material;
var gn3: Material;
var gn4: Material;
var gn5: Material;
var gn6: Material;
var gn7: Material;
var gn8: Material;

var n1: Material;
var n2: Material;
var n3: Material;
var n4: Material;
var n5: Material;
var n6: Material;
var n7: Material;
var n8: Material;

//**************************************************** Agent In mind plan ***********************************************/
var mycurrent=0;
//************************************************* Animation **************************************************/
var walking : boolean = false;
var lookAtUs : boolean = false;

var alan : GameObject;
alan = gameObject.Find("Alan_talk");

var FPC : GameObject;
var target: Transform;
//FPC = gameObject.Find("firstPersonController");

//************************************************ Register time *************************************************************//

var todayTime;
var nowTime;
var record_time;
//***************************************************** counter down *********************************************************//

var countMax:int= 120;
var counterDown:int;
var count_window:boolean=false;

/**/
var sr;
var sr1;
var sr2;
var computerName;
//var us : Transform;

var play:boolean=false;

var help:boolean=false;
var win1:boolean=false;
var win2:boolean=false;
var win3:boolean=false;
var win4:boolean=false;
var win5:boolean=false;
var win6:boolean=false;
var win7:boolean=false;
var win8:boolean=false;
var win9:boolean=false;
var win10:boolean=false;
var win11:boolean=false;

var coutn_finish:int=0;

var instruct_img1:Texture;
var instruct_img2:Texture;
var instruct_img3:Texture;
var instruct_img4:Texture;
var instruct_img5:Texture;
var instruct_img6:Texture;
var instruct_img7:Texture;
var instruct_img8:Texture;
var instruct_img9:Texture;
var instruct_img10:Texture;
var instruct_img11:Texture;

var go:boolean=false;
var temp_hit:Vector3;
////////////////////////////////
var countMatch= new Array();
var countMismatch= new Array();

var regions_NOT_selected_before= new Array();
var regions_selected_before= new Array();

var repetition_counter:int=0;
var violation_counter:int=0;
var help_counter:int=0;

var resultFilepath : String;
var resultFilename : String;

// to track human user reply to agent's request

var human_reply:boolean=false;
var human_reply_region:int=0;
var human_reply_accept:int=0;
var human_reply_reject:int=0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Start(){
resultFilepath = Application.dataPath+"/HATLogFiles/";
resultFilename = "Result_";


/*if (Application.platform == RuntimePlatform.OSXPlayer){

}

else if (Application.platform == RuntimePlatform.OSXWebPlayer){

//print(resultFilepath+resultFilename+computerName+"_"+todayTime);
}

else if (Application.platform == RuntimePlatform.WindowsPlayer){

//print(resultFilepath+resultFilename+computerName+"_"+todayTime);
} 

if (Application.platform == RuntimePlatform.WindowsWebPlayer){

//print(resultFilepath+resultFilename+computerName+"_"+todayTime);
}

if (Application.platform == RuntimePlatform.WindowsEditor){

//print(resultFilepath+resultFilename+computerName+"_"+todayTime);
//print("folder exists? "+ Directory.Exists (resultFilepath));
	if (!Directory.Exists (resultFilepath)) {

		Directory.CreateDirectory (resultFilepath);
		print("again,...folder exists? "+ Directory.Exists (resultFilepath));
		print(Directory.GetAccessControl(resultFilepath));
	}
}


else {
print(resultFilepath+resultFilename+computerName+"_"+todayTime);
}*/

//win1=true;

play=true;

edgez[0]=edgez[1]=-1;
edgez_next[0]=edgez_next[1]=-1;

alan.animation.Play("standing_greeting_2");

img_ary= [img1,img2,img3,img4,img5,img6,img7,img8];
clicked_img_ary=[clicked_img1,clicked_img2,clicked_img3,clicked_img4,clicked_img5,clicked_img6,clicked_img7,clicked_img8];

/* initialize marker material*/

mouse_img1=n1;
mouse_img2=n2;
mouse_img3=n3;
mouse_img4=n4;
mouse_img5=n5;
mouse_img6=n6;
mouse_img7=n7;
mouse_img8=n8;


/**/

}
//***********************************************************//
function Awake()
{

    computerName=System.Environment.UserName;
    
    if (computerName ==null){
    computerName="computerName";
    }
 
	record_time = Time.time;
	todayTime = System.DateTime.Now.ToString("yyyy-MM-dd hh.mm.ss");
    nowTime=System.DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
}


/**/
function writeHintButton(requestwindow){
sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Hint Button Clicked?=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time,request_window);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Hint Button Clicked?=> ", record_time, requestwindow);
}

/**/
function writegameOver(){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Is gameOve?=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time,"gameOver");
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Is gameOve?=> ", record_time, "gameOver");
}

/**/
function writeReasonButton(reason_btn_clicked){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Reason Button Clicked?=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time,reason_btn_clicked);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Reason Button Clicked?=> ", record_time, reason_btn_clicked);
}
/**/
function writeReasonRegion(reasonrgn:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Agent Reason Region=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time, reasonrgn);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent Reason Region=> ", record_time, reasonrgn);
}
/**/

function writeAgentRequestedRegion(request1:int, request2:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Agent Requested Region=> "+nowTime);
sr1.WriteLine ("{0}, {1}, {2}",record_time, request1, request2);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent Requested Region=> ", record_time, request1);
}
/**/

function writeHumanReply(reply:boolean, state:String,counter:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Human Accepts agent's request?=> "+nowTime);
sr1.WriteLine ("{0}, {1}, {2}, {3}",record_time, reply, state, counter );
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent Requested Region=> ", record_time, request1);
}
/**/
function writeHumanRequestedRegions(request:int){

//print ("inside agent requested region "+request);
sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Human Requested Region=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time, request);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Human Requested Region=> ", record_time, request);
}

/**/
function writeHumanSelected(regionselected:int, regionrequested:int, humanopinion:boolean){
sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("**************************************************************",true);
sr1.WriteLine ("Human Selected Region=> "+nowTime);
sr1.WriteLine ("{0}, {1}, {2}, {3}",record_time,regionselected, regionrequested, humanopinion);
sr1.Close();

//PHPNewWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime);

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Human Selected Region=> ", record_time, region);
}
/**/
function writeHumanSelectedInitial(regionselected:int){
sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("**************************************************************",true);
sr1.WriteLine ("Human Selected Region=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time,regionselected);
sr1.Close();

//PHPNewWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime);

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Human Selected Region=> ", record_time, region);
}
/**/
function writeAgentSelected(region:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Agent Selected Region=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time,region);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent Selected Region=> ", record_time, region);
}
/**/
function writefeedback(fdbck:boolean){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Agent feedback to Human Action match?=> "+nowTime);
sr1.WriteLine ("{0}, {1}",record_time,fdbck);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent feedback to Human Action match?=> ", record_time, fdbck);
}
/***********************************************************************************************************************/
/***********************************************************************************************************************/
/****************************************** new write function help- violation- repition *******************************/
/***********************************************************************************************************************/
function writeViolation(Violation:boolean, first:int , second:int, counter:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Human violate skipping regions=> "+nowTime,true);
sr1.WriteLine ("{0}, {1}, {2}, {3}, {4}",record_time,Violation,first,second,counter);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent feedback to Human Action match?=> ", record_time, fdbck);
}
/**/
function writeRepetition(Repetition:boolean, counter:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Repetition Window and No. of Repetitions=> "+nowTime,true);
sr1.WriteLine ("{0}, {1}, {2}",record_time,Repetition,counter);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent feedback to Human Action match?=> ", record_time, fdbck);
}
/**/
function writeHelpButton(HelpButton:boolean, counter:int){

sr1 = File.AppendText(resultFilepath+resultFilename+computerName+"_"+todayTime+".csv");
sr1.WriteLine ("Help Window and No. of Repetitions=> "+nowTime);
sr1.WriteLine ("{0}, {1}, {2}",record_time,HelpButton,counter);
sr1.Close();

//PHPFileWrite("ButtonClicked_"+resultFilename+computerName+"_"+todayTime+"_.csv", todayTime, nowTime, "Agent feedback to Human Action match?=> ", record_time, fdbck);
}
/**/
///////////////////////
/*function PHPFileWrite(srvr_filename,srvr_todayTime,srvr_nowTime, srvr_title, srvr_record_time, srvr_valuee )
{
    var form = new WWWForm();
   
    form.AddField("srvr_filename",srvr_filename);
    form.AddField("srvr_todayTime", srvr_todayTime);
    form.AddField("srvr_nowTime", srvr_nowTime);
    form.AddField("srvr_title", srvr_title);
    form.AddField("srvr_record_time", record_time);
    form.AddField("srvr_valuee", srvr_valuee);
    
    var php = new WWW("http://comp.mq.edu.au/vworlds/script.php", form); // if you're not using unity webplayer, don't put the "http://" in front of the url
   // var php1 = new WWW("comp.mq.edu.au/nhanna/html/script.php", form);
    yield php;
  //  yield php1;
}*/

/*function PHPNewWrite(srvr_filename,srvr_todayTime,srvr_nowTime){
var form = new WWWForm();

	form.AddField("srvr_filename",srvr_filename);
    form.AddField("srvr_todayTime", srvr_todayTime);
    form.AddField("srvr_nowTime", srvr_nowTime);
    form.AddField("newline","*************************************************************************");
    
	var php = new WWW("http://comp.mq.edu.au/vworlds/newline.php", form); // if you're not using unity webplayer, don't put the "http://" in front of the url
   // var php1 = new WWW("comp.mq.edu.au/nhanna/html/script.php", form);
    yield php;
  //  yield php1;
}*/
////////////////////////////////////////////////////////////////////

/*function PHPNewWrite2(srvr_filename,srvr_todayTime,srvr_nowTime){
var form = new WWWForm();

	form.AddField("srvr_filename",srvr_filename);
    form.AddField("srvr_todayTime", srvr_todayTime);
    form.AddField("srvr_nowTime", srvr_nowTime);
    form.AddField("newline","*************************************************************************");
    
	var php = new WWW("http://comp.mq.edu.au/vworlds/script.php", form); // if you're not using unity webplayer, don't put the "http://" in front of the url
   // var php1 = new WWW("comp.mq.edu.au/nhanna/html/script.php", form);
    yield php;
  //  yield php1;
}*/
//////////////

//*********************************************************************************************************//
function give_feedback(){

if (proposed_regions[step]==in_which_region(point3)){
		writefeedback(true);
		feedback_content="Thanks for accepting my request and going to region "+ (proposed_regions[step]+1) +". we are on the right track. hurry\n\n\n";
		}
		else{
		writefeedback(false);
		feedback_content="It seems you have another opinion, I have to hurry to another region that really costs me time.\n\n\n";
		}
		writeReasonRegion((proposed_regions[step]+1));
		step=step+1;
 feedback_window=true;
}

//*********************************************************************************************************//
function OnGUI () {	
GUI.skin=helpskin;
		GUI.Box (new Rect (10,5,200,30) , "");
		GUI.Label (new Rect (25,5,200,60) , "Press H for help window");
GUI.skin=null;

	windowRect_alanRequest   = Rect ((Screen.width-440),(Screen.height-200), 400, 150);

	windowRect_alanReason  = Rect ((Screen.width-440),(Screen.height-420), 400, 150);

	windowRect_alanfeedback   = Rect ((Screen.width-440),(Screen.height-200), 400, 150);

	windowRect_humanRequest  = Rect ((Screen.width-300),(Screen.height-450), 253, 396);

	windowRect_alanReply  = Rect ((Screen.width-460),(Screen.height-260), 430, 220);
	
	windowRect5  = Rect (150, 150, 300, 300);

	windowRect_alanHint  = Rect ((Screen.width-440),(Screen.height-200), 400, 150);
	
	windowRect_instruct= Rect(Screen.width/2 -256,50,512,512);
	
	windowRect_alanWarning = Rect ((Screen.width-440),(Screen.height-200), 400, 150);
	
	windowRect_alanRepetition = Rect ((Screen.width-440),(Screen.height-200), 400, 150);
	
	windowRect_controlwindows=Rect (10,100,140,150);

    if(show_window && !hint_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanRequest = GUILayout.Window (0, windowRect_alanRequest, DoMyWindow, "Alan's Request");
    GUI.skin=null;
     }
    
    if(reason_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanReason = GUILayout.Window (1, windowRect_alanReason, ReasonWindow, "Alan's Reason");
    GUI.skin=null;
    }
    
    if(changeCursor){
    GUI.skin=titleskin;
    GUI.Label(Rect((Input.mousePosition.x-20),(Screen.height-Input.mousePosition.y-40),75,75),cursor);
    GUI.skin=null;
    }
    
    if(feedback_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanfeedback = GUILayout.Window (2, windowRect_alanfeedback, feedbackWindow, "Alan's feedback", GUILayout.Width (300));
    GUI.skin=null;
    }
    
    if(request_window && ! help ){
    GUI.skin=titleskin;
    if(! show_window  || ! reason_window){
       windowRect_humanRequest = GUILayout.Window (3, windowRect_humanRequest, RequestWindow, "Your Request to Alan");
      }
      GUI.skin=null;
    }
    
    if(reply_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanReply = GUILayout.Window (4, windowRect_alanReply, ReplyWindow, "Alan's Reply");
    GUI.skin=null;
     }
    
    if(hint_window && ! feedback_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanHint = GUILayout.Window (5, windowRect_alanHint, HintWindow, "Alan asks: Any suggestion?");
    GUI.skin=null;
    }

   if(count_window){
   GUI.skin=titleskin;
   windowRect5 = GUILayout.Window (7, windowRect5, CounterWindow, "Time Left", GUILayout.Width (250));
   GUI.skin=null;
    }
    
    if(win1){
    windowRect_instruct = GUILayout.Window (8, windowRect_instruct, instruct1, "- 1 -");
    
    }
   if(win2){
    windowRect_instruct = GUILayout.Window (9, windowRect_instruct, instruct2, "- 2 -");
    
    }
       if(win3){
    windowRect_instruct = GUILayout.Window (10, windowRect_instruct, instruct3, "- 3 -");
    
    }
       if(win4){
    windowRect_instruct = GUILayout.Window (11, windowRect_instruct, instruct4, "- 4 -");
    
    }
    if(win5){
    windowRect_instruct = GUILayout.Window (12, windowRect_instruct, instruct5, "- 5 -");
    
    }
    if(win6){
    windowRect_instruct = GUILayout.Window (13, windowRect_instruct, instruct6, "- 6 -");
    
    }
    if(win7){
    windowRect_instruct = GUILayout.Window (14, windowRect_instruct, instruct7, "- 7 -");
    
    }
   if(win8){
    windowRect_instruct = GUILayout.Window (15, windowRect_instruct, instruct8, "- 8 -");
    
    }
   if(win9){
    windowRect_instruct = GUILayout.Window (16, windowRect_instruct, instruct9, "- 9 -");
    
    }
   if(win10){
    windowRect_instruct = GUILayout.Window (17, windowRect_instruct, instruct10, "- 10 -");
    
    }
   if(win11){
    windowRect_instruct = GUILayout.Window (18, windowRect_instruct, instruct11, "- 11 -");
    
    }
   if(gameOver){
   show_window=false;
    GUI.skin=titleskin;
    windowRect_alanHint = GUILayout.Window (19, windowRect_alanHint, gameOverWindow, "Mission Completed");
    GUI.skin=null;
    }
   /**/
   if(warning_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanWarning = GUILayout.Window (20, windowRect_alanWarning, WarningWindow, "Violation to the rules");
    GUI.skin=null;
    }
       /**/
   if( repetition_window && ! help){
    GUI.skin=titleskin;
    windowRect_alanRepetition = GUILayout.Window (21, windowRect_alanRepetition, RepetitionWindow, "Repetition of Selection");
    GUI.skin=null;
    }
    
  if(controls_window){
    GUI.skin=titleskin;
    windowRect_controlswindow = GUILayout.Window (22, windowRect_controlswindow, ControlsWindow, "Controls");
    GUI.skin=null;
    }
   /**/
}

//*********************************************************************************************************//
function CounterWindow (windowID : int) {
   
    GUILayout.Label("Time Left to complete \n");  
    GUILayout.Label(" "+counterDown);

}
//*********************************************************************************************************//
function WarningWindow(windowID : int) {

     GUILayout.BeginHorizontal();
     GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
     GUI.skin=windowskin;
     GUILayout.Label("You can't select "+(in_which_region(temp_hit)+1)+" which is more than one region away from the neaest region "+ (in_which_region(nearedge)+1) +"\n\n");
     GUI.skin=null;
     
     GUI.skin=exitskin;
     GUILayout.Box("\t\t  Press Z to exit window  \t\t");
     GUI.skin=null;    
         
     GUILayout.EndVertical();
     GUILayout.EndHorizontal();
} 
//*********************************************************************************************************//
function RepetitionWindow(windowID : int) {

     GUILayout.BeginHorizontal();
     GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
     GUI.skin=windowskin;
     GUILayout.Label("You selected "+(in_which_region(temp_hit)+1)+" which has already been taken before, would you please try another region?\n\n");
     GUI.skin=null;
     
     GUI.skin=exitskin;
     GUILayout.Box("\t\t  Press Z to exit window  \t\t");
     GUI.skin=null;    
         
     GUILayout.EndVertical();
     GUILayout.EndHorizontal();
     repetition_counter++;
     writeRepetition(true,repetition_counter);
} 

//*********************************************************************************************************//

function instruct1(windowID : int) {
     help=true;
     help_counter++;
  
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img1);
     GUILayout.BeginHorizontal();
     
              if (GUILayout.Button ("NO PREVIOUS")){

       
    }
     
         if (GUILayout.Button ("NEXT")){
win1=false;
win2=true;
       
    }
     
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}

function instruct2(windowID : int) {
     help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img2);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win2=false;
win1=true;
       
    }  
     
         if (GUILayout.Button ("NEXT")){
win2=false;
win3=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}
/**/
function instruct3(windowID : int) {

help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img3);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win3=false;
win2=true;
       
    }  
     
         if (GUILayout.Button ("NEXT")){
win3=false;
win4=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}

/**/
function instruct4(windowID : int) {

help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img4);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win4=false;
win3=true;
       
    }  
     
         if (GUILayout.Button ("NEXT")){
win4=false;
win5=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}
/**/
function instruct5(windowID : int) {

help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img5);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win5=false;
win4=true;
       
    }  
     
         if (GUILayout.Button ("NEXT")){
win5=false;
win6=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}
/**/
function instruct6(windowID : int) {

help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img6);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win6=false;
win5=true;
       
    }  
     
         if (GUILayout.Button ("NEXT")){
win6=false;
win7=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}
/**/
function instruct7(windowID : int) {
help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img7);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win7=false;
win6=true;
      
    }  
     
         if (GUILayout.Button ("NEXT")){
win7=false;
win8=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}

/**/
function instruct8(windowID : int) {
help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img8);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win8=false;
win7=true;
      
    }  
     
         if (GUILayout.Button ("NEXT")){
win8=false;
win9=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}
/**/
function instruct9(windowID : int) {
help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img9);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win9=false;
win8=true;
      
    }  
     
         if (GUILayout.Button ("NEXT")){
win9=false;
win10=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}

function instruct10(windowID : int) {
help=true;
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img10);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win10=false;
win9=true;
      
    }  
  //GUILayout.Box ("Press Z to FINISH");   
         if (GUILayout.Button ("NEXT")){
win10=false;
win11=true;
       
    }
     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}

function instruct11(windowID : int) {
             
     GUILayout.BeginVertical();
     GUILayout.Label (instruct_img11);
     GUILayout.BeginHorizontal();
     
     
   if (GUILayout.Button ("PREVIOUS")){
win11=false;
win10=true;
      
    }  
  GUILayout.Box ("Press Z to FINISH");   

     GUILayout.EndHorizontal();
    GUILayout.EndVertical();
               
}

/****************************************/

function DoMyWindow (windowID : int) {
    
     GUILayout.BeginHorizontal();
     GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
     GUI.skin=windowskin;
     GUILayout.Label(window_content);
     GUI.skin=null;

     GUI.skin=exitskin;
     GUILayout.Box(exitmsg);
     GUI.skin=null;
     GUILayout.EndVertical();
     GUILayout.EndHorizontal();
     

     
}

function gameOverWindow (windowID : int) {
    
     GUILayout.BeginHorizontal();
     GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
     GUI.skin=windowskin;
     GUILayout.Label(gameOver_content);
     GUI.skin=null;

     GUILayout.EndVertical();
     GUILayout.EndHorizontal();
     
writegameOver();
     
}


function ReasonWindow (windowID : int) {
    
     GUILayout.BeginHorizontal();
     GUILayout.Label(reasonimg, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
     GUI.skin=windowskin;
     GUILayout.Label(reason_content);
     GUI.skin=null;
     
     GUI.skin=exitskin;
     GUILayout.Box("\t\t  Press Z to exit agent reason window  \t\t");
     GUI.skin=null;
     GUILayout.EndVertical();
     GUILayout.EndHorizontal();


}

function feedbackWindow (windowID : int) {
    
GUILayout.BeginHorizontal();
     GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
     GUI.skin=windowskin;
     GUILayout.Label(feedback_content);
     GUI.skin=null;
     
     GUI.skin=exitskin; 
     GUILayout.Box("press Z to exit agent feedback window"); 
     GUI.skin=null;
     GUILayout.EndVertical();
     GUILayout.EndHorizontal();


}

function ReplyWindow (windowID : int) {
     GUI.skin=windowskin;
     GUILayout.BeginHorizontal();
     GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120)); 
    
     GUILayout.BeginVertical();
    
     GUILayout.Label(reply_content);
     GUI.skin=null;
         GUILayout.EndVertical();
     GUILayout.EndHorizontal();
    GUILayout.Box("press Z to exit agent reply window"); 


}

function HintWindow (windowID : int) {
    GUI.skin=windowskin;
    GUILayout.BeginHorizontal();
   
    GUILayout.Label(imgalan, GUILayout.Width(120), GUILayout.Height(120));
    
    GUILayout.BeginVertical();
    GUILayout.Label("It is my turn.\nDo you want to suggest which region I should go to?\n\n");
    GUI.skin=null;
    
    GUI.skin=exitskin;
    GUILayout.Box("press N => NO \n OR \n Y => YES\n");
     
    GUILayout.EndVertical();
    
    GUILayout.EndHorizontal();

        
}

function ControlsWindow (windowID : int) {
    GUI.skin=windowskin;

    GUILayout.BeginVertical();
    
    GUILayout.BeginHorizontal();
    
    GUILayout.Label(n, GUILayout.Width(45), GUILayout.Height(45));
    GUILayout.Label(y, GUILayout.Width(45), GUILayout.Height(45));
    GUILayout.Label(x, GUILayout.Width(45), GUILayout.Height(45));
    GUILayout.Label(z, GUILayout.Width(45), GUILayout.Height(45));
    
    GUILayout.EndHorizontal();
    
    GUILayout.BeginHorizontal();
    
    GUI.skin=exitskin;
    GUILayout.Label("\tNo\t");
    GUILayout.Label("Yes");
    GUILayout.Label("  Reason");
    GUILayout.Label(" Window");
    GUI.skin=null;
    
    GUILayout.EndHorizontal();
    
    GUILayout.EndVertical();
        
}

function RequestWindow (windowID : int) {

 GUI.skin=windowskin;
 GUILayout.Label("select the number for the region where you would like Alan to build a fence.",GUILayout.Width(200),GUILayout.Height(75));
 GUI.skin=null;
 
 GUILayout.BeginHorizontal();
 if(GUILayout.Button(img1,GUILayout.Width(75),GUILayout.Height(75))){
 
 if(human_region1){
 
 human_region1=false;
 human_requested_region[0]=0;
 }
 
 else{
 
 human_region1=true;
 human_requested_region[0]=1;

 }
 
 }
 
  if(GUILayout.Button(img8,GUILayout.Width(75),GUILayout.Height(75))){
    if(human_region8){
 
 human_region8=false;
 human_requested_region[7]=0;
 }
 else{
 
 human_region8=true;
 human_requested_region[7]=1;
 }

  }
   if(GUILayout.Button(img7,GUILayout.Width(75),GUILayout.Height(75))){
        
        if(human_region7){
        human_region7=false;
        human_requested_region[6]=0;
 }
 else{
 
 human_region7=true;
 human_requested_region[6]=1;
 }
   }

   GUILayout.EndHorizontal();
  	GUILayout.BeginHorizontal();
    if(GUILayout.Button(img2,GUILayout.Width(75),GUILayout.Height(75))){
    if(human_region2){
        human_region2=false;
        human_requested_region[1]=0;
 }
 else{
 
 human_region2=true;
 human_requested_region[1]=1;
 }
    
    }

    GUILayout.Button(imgyernt,GUILayout.Width(75),GUILayout.Height(75));
   if( GUILayout.Button(img6,GUILayout.Width(75),GUILayout.Height(75))){
   if(human_region6){
        human_region6=false;
        human_requested_region[5]=0;
 }
 else{
 
 human_region6=true;
 human_requested_region[5]=1;
 }
   
   }
   GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
    if(GUILayout.Button(img3,GUILayout.Width(75),GUILayout.Height(75))){
      if(human_region3){
        human_region3=false;
        human_requested_region[2]=0;
 }
 else{
 
 human_region3=true;
 human_requested_region[2]=1;
 }
    
    }
    if(GUILayout.Button(img4,GUILayout.Width(75),GUILayout.Height(75))){
      if(human_region4){
        human_region4=false;
        human_requested_region[3]=0;
 }
 else{
 
 human_region4=true;
 human_requested_region[3]=1;
 }
    
    }
	if(GUILayout.Button(img5,GUILayout.Width(75),GUILayout.Height(75))){
	  if(human_region5){
        human_region5=false;
        human_requested_region[4]=0;
 }
 else{
 
 human_region5=true;
 human_requested_region[4]=1;
 }
	
	}
   GUILayout.EndHorizontal();
  if(GUILayout.Button("Submit Request",GUILayout.Width(230),GUILayout.Height(50))){
  request_window=false;
  processing_human_request();
  
  human_region1=false;
  human_region2=false;
  human_region3=false;
  human_region4=false;
  human_region5=false;
  human_region6=false;
  human_region7=false;
  human_region8=false;
  
  }

}

/********************************************************************************************************/
function wait(){

yield WaitForSeconds(7.0f); 

}

//*********************************************************************************************************//
function check_violation(test:Vector3){
violation_counter++;

if(in_which_region(nearedge)>in_which_region(test) && (((in_which_region(nearedge)+1)-(in_which_region(test)+1))%8) >1){

if((((in_which_region(nearedge)+1)-(in_which_region(test)+1))%8)!=7){
warning_window=true;
writeViolation(warning_window, (in_which_region(nearedge)+1) ,(in_which_region(test)+1), violation_counter);
  return true;
  }
}

else if(in_which_region(nearedge)<in_which_region(test)&&(((in_which_region(test)+1)-(in_which_region(nearedge)+1))%8)>1 &&(((in_which_region(test)+1)-(in_which_region(nearedge)+1))%8) !=7){

warning_window=true;
writeViolation(warning_window, (in_which_region(nearedge)+1) ,(in_which_region(test)+1), violation_counter);
  return true;
}

else
 
  return false;
    
}
//*********************************************************************************************************//
function check_repetition(test:Vector3){

   if( region_checked[in_which_region(test)]==1){
       repetition_window=true;
       return true;
       }
   else 
       return false;
}
//*********************************************************************************************************//
function reset_region_marker(){

if(region_checked[0]==1){
mouse_img1=yn1;
}
else if (region_checked[0]==0){
mouse_img1=n1;
}

if(region_checked[1]==1){
mouse_img2=yn2;
}
else if (region_checked[1]==0){
mouse_img2=n2;
}

if(region_checked[2]==1){
mouse_img3=yn3;
}
else if (region_checked[2]==0){
mouse_img3=n3;
}

if(region_checked[3]==1){
mouse_img4=yn4;
}
else if (region_checked[3]==0){
mouse_img4=n4;
}

if(region_checked[4]==1){
mouse_img5=yn5;
}
else if (region_checked[4]==0){
mouse_img5=n5;
}

if(region_checked[5]==1){
mouse_img6=yn6;
}
else if (region_checked[5]==0){
mouse_img6=n6;
}

if(region_checked[6]==1){
mouse_img7=yn7;
}
else if (region_checked[6]==0){
mouse_img7=n7;
}

if(region_checked[7]==1){
mouse_img8=yn8;
}
else if (region_checked[7]==0){
mouse_img8=n8;
}

}
//*********************************************************************************************************//
function select_region_marker(region1:int, region2:int){

if(region_checked[0]==1){
mouse_img1=yn1;
}
else if (region_checked[0]==0){
mouse_img1=n1;
}

if(region_checked[1]==1){
mouse_img2=yn2;
}
else if (region_checked[1]==0){
mouse_img2=n2;
}

if(region_checked[2]==1){
mouse_img3=yn3;
}
else if (region_checked[2]==0){
mouse_img3=n3;
}

if(region_checked[3]==1){
mouse_img4=yn4;
}
else if (region_checked[3]==0){
mouse_img4=n4;
}

if(region_checked[4]==1){
mouse_img5=yn5;
}
else if (region_checked[4]==0){
mouse_img5=n5;
}

if(region_checked[5]==1){
mouse_img6=yn6;
}
else if (region_checked[5]==0){
mouse_img6=n6;
}

if(region_checked[6]==1){
mouse_img7=yn7;
}
else if (region_checked[6]==0){
mouse_img7=n7;
}

if(region_checked[7]==1){
mouse_img8=yn8;
}
else if (region_checked[7]==0){
mouse_img8=n8;
}

}

//*********************************************************************************************************//
function Update () 
{

FPC = gameObject.Find("firstPersonController");

if(human_region1){
img1=clicked_img1;
}
else{
img1=empty_img1;
}

if(human_region2){
img2=clicked_img2;
}
else{
img2=empty_img2;
}

if(human_region3){
img3=clicked_img3;
}
else{
img3=empty_img3;
}

if(human_region4){
img4=clicked_img4;
}
else{
img4=empty_img4;
}

if(human_region5){
img5=clicked_img5;
}
else{
img5=empty_img5;
}

if(human_region6){
img6=clicked_img6;
}
else{
img6=empty_img6;
}

if(human_region7){
img7=clicked_img7;
}
else{
img7=empty_img7;
}

if(human_region8){
img8=clicked_img8;
}
else{
img8=empty_img8;
}


//////////////////////////////////////////////////////////////////////////////////////////////

record_time = Time.time;
nowTime=System.DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");

/**/
//var lineRenderer : LineRenderer = GetComponent(LineRenderer);
//lineRenderer.SetVertexCount(2);

/**/

if(! gameOver){
Screen.showCursor = false;
cursor=firyCursor;
changeCursor=true;
}

else if (gameOver){
Screen.showCursor = true;
//MouseCursor.Arrow;
changeCursor=false;
}

//var ext_Yernt_position = GetComponent( "yerntposition" );
ext_corner1=ext_Yernt_position.corner1;
ext_corner2=ext_Yernt_position.corner2;
ext_corner3=ext_Yernt_position.corner3;
ext_corner4=ext_Yernt_position.corner4;

gt_yernt_extremes(ext_corner1,ext_corner2,ext_corner3,ext_corner4);
gt_yernt_measure();

/*********************************** Assigning region points*************************************/

var q:Vector3;
region_point[0]= Vector3(ext_corner4.x+1,ext_corner4.y, ext_corner4.z+1); // 0
marker_point[0]= Vector3(ext_corner4.x+2,ext_corner4.y+0.5, ext_corner4.z+2); 
//Instantiate(pillar,region_point[0],Quaternion.identity );
path_point[0]=   Vector3(ext_corner4.x+4,ext_corner4.y+0.5, ext_corner4.z+4);

region_point[1]= Vector3(ext_corner3.x+(0.5*(Mathf.Abs(ext_corner3.x-ext_corner4.x))),ext_corner3.y, ext_corner3.z+1.5);  // 1
marker_point[1]= Vector3(ext_corner3.x+(0.5*(Mathf.Abs(ext_corner3.x-ext_corner4.x))),ext_corner3.y+0.5, ext_corner3.z+3);
//Instantiate(pillar,region_point[1],Quaternion.identity );
path_point[1]  = Vector3(ext_corner3.x+(0.25*(Mathf.Abs(ext_corner3.x-ext_corner4.x))),ext_corner3.y+0.5, ext_corner3.z+4);

region_point[2]=Vector3(ext_corner3.x-1,ext_corner3.y, ext_corner3.z+1); //2
marker_point[2]=Vector3(ext_corner3.x-2,ext_corner3.y+0.5, ext_corner3.z+2);
//Instantiate(pillar,region_point[2],Quaternion.identity );
path_point[2]=Vector3(ext_corner3.x-4,ext_corner3.y+0.5, ext_corner3.z+4);

region_point[3]=Vector3(ext_corner3.x-1.5,ext_corner3.y, ext_corner1.z+(0.5*(Mathf.Abs(ext_corner1.z-ext_corner3.z)))); //3
marker_point[3]=Vector3(ext_corner3.x-3,ext_corner3.y+0.5, ext_corner1.z+(0.5*(Mathf.Abs(ext_corner1.z-ext_corner3.z))));
//Instantiate(pillar,region_point[3],Quaternion.identity );
path_point[3]=Vector3(ext_corner3.x-4,ext_corner3.y+0.5, ext_corner1.z+(0.5*(Mathf.Abs(ext_corner1.z-ext_corner3.z))));

region_point[4]=Vector3(ext_corner1.x-1,ext_corner1.y, ext_corner1.z-1); //4
marker_point[4]=Vector3(ext_corner1.x-2,ext_corner1.y+0.5, ext_corner1.z-2);
//Instantiate(pillar,region_point[4],Quaternion.identity );
path_point[4]=Vector3(ext_corner1.x-4,ext_corner1.y+0.5, ext_corner1.z-4);

region_point[5]=Vector3(ext_corner1.x+(0.5*(Mathf.Abs(ext_corner1.x-ext_corner2.x))),ext_corner1.y, ext_corner1.z-1.5); //5
marker_point[5]=Vector3(ext_corner1.x+(0.5*(Mathf.Abs(ext_corner1.x-ext_corner2.x))),ext_corner1.y+0.5, ext_corner1.z-3); 
//Instantiate(pillar,region_point[5],Quaternion.identity );
path_point[5]=Vector3(ext_corner1.x+(0.5*(Mathf.Abs(ext_corner1.x-ext_corner2.x))),ext_corner1.y+0.5, ext_corner1.z-4); 

region_point[6]=Vector3(ext_corner2.x+1,ext_corner2.y, ext_corner2.z-1); //6
marker_point[6]=Vector3(ext_corner2.x+2,ext_corner2.y+0.5, ext_corner2.z-2);
//Instantiate(pillar,region_point[6],Quaternion.identity );
path_point[6]=Vector3(ext_corner2.x+4,ext_corner2.y+0.5, ext_corner2.z-4);


region_point[7]=Vector3(ext_corner2.x+1.5,ext_corner2.y, ext_corner2.z+ (0.5*(Mathf.Abs(ext_corner2.z-ext_corner4.z)))); //7
marker_point[7]=Vector3(ext_corner2.x+3,ext_corner2.y+0.5, ext_corner2.z+ (0.5*(Mathf.Abs(ext_corner2.z-ext_corner4.z))));
//Instantiate(pillar,marker_point[7],Quaternion.identity );
path_point[7]=Vector3(ext_corner2.x+4,ext_corner2.y+0.5, ext_corner2.z+ (0.5*(Mathf.Abs(ext_corner2.z-ext_corner4.z))));

//
lowHeight= Terrain.activeTerrain.SampleHeight(GameObject.Find("NewYernt").transform.position);
midHeight=Terrain.activeTerrain.SampleHeight(GameObject.Find("NewYernt").transform.position)+1.5;
highHeight=Terrain.activeTerrain.SampleHeight(GameObject.Find("NewYernt").transform.position)+3;

//print("the 3 levels of y= "+lowHeight +" , " +midHeight+" and "+highHeight);
adjust_marker_height(in_which_region(FPC.transform.position));
//create_markers();
//adjust_marker_rotation();

/*******************************************************************************/

/*mouse position*/

	  mousePos = Input.mousePosition;

	  var mouse_ray : Ray = camera.ScreenPointToRay (mousePos);
	  var mouse_hit : RaycastHit;
	  if (Physics.Raycast (mouse_ray, mouse_hit))
	  {
	  worldPos=mouse_hit.point;
	//region1.renderer.material=gn1;   
/*  to colour close region*/
	mouse_region=in_which_region(worldPos);
	
	reset_region_marker();
	/*********************************** to make all region changed into green with mouse **************************************/

if(mouse_region==edgez_next[0]){
if(mouse_region==0){mouse_img1=gn1;}
if(mouse_region==1){mouse_img2=gn2;}
if(mouse_region==2){mouse_img3=gn3;}
if(mouse_region==3){mouse_img4=gn4;}
if(mouse_region==4){mouse_img5=gn5;}
if(mouse_region==5){mouse_img6=gn6;}
if(mouse_region==6){mouse_img7=gn7;}
if(mouse_region==7){mouse_img8=gn8;}
}

else if(mouse_region==edgez_next[1]){
if(mouse_region==0){mouse_img1=gn1;}
if(mouse_region==1){mouse_img2=gn2;}
if(mouse_region==2){mouse_img3=gn3;}
if(mouse_region==3){mouse_img4=gn4;}
if(mouse_region==4){mouse_img5=gn5;}
if(mouse_region==5){mouse_img6=gn6;}
if(mouse_region==6){mouse_img7=gn7;}
if(mouse_region==7){mouse_img8=gn8;}
}

else if((edgez_next[0]==-1) && (edgez_next[1]==-1)){

if(mouse_region==0){
mouse_img1=gn1;
}

else if(mouse_region==1){
mouse_img2=gn2;
}

else if(mouse_region==2){
mouse_img3=gn3;
}


else if(mouse_region==3){
mouse_img4=gn4;
}

else if(mouse_region==4){
mouse_img5=gn5;
}

else if(mouse_region==5){
mouse_img6=gn6;
}

else if(mouse_region==6){
mouse_img7=gn7;
}

else if(mouse_region==7){
mouse_img8=gn8;
}

}

GameObject.Find("r1/region1").renderer.material=mouse_img1;
GameObject.Find("r2/region2").renderer.material=mouse_img2;
GameObject.Find("r3/region3").renderer.material=mouse_img3;
GameObject.Find("r4/region4").renderer.material=mouse_img4;
GameObject.Find("r5/region5").renderer.material=mouse_img5;
GameObject.Find("r6/region6").renderer.material=mouse_img6;
GameObject.Find("r7/region7").renderer.material=mouse_img7;
GameObject.Find("r8/region8").renderer.material=mouse_img8;

	/**/	
	Xdiff1= Mathf.Abs(point1.x - worldPos.x);
	Zdiff1= Mathf.Abs(point1.z - worldPos.z);
	
	Xdiff2= Mathf.Abs(point2.x - worldPos.x);
	Zdiff2= Mathf.Abs(point2.z - worldPos.z);
	
	totaldiff1= Xdiff1+Zdiff1;
	totaldiff2= Xdiff2+Zdiff2;
	
	
	
	if(totaldiff1 < totaldiff2)
	{
		Debug.DrawLine(point1, worldPos, Color.green);
		nearedge= point1;
		faredge= point2;
		}
	else
	{
		Debug.DrawLine(point2, worldPos, Color.green);
		nearedge= point2;
		faredge = point1;
		}
  }

  if (normalCase){  
//lineRenderer.SetPosition(0, worldPos);
//lineRenderer.SetPosition(1, nearedge);
}
   /************************************************************************************************************************/
   /***********************************************************************************************************************/
   /****************************************************** AGENT TURN ****************************************************/
   /*********************************************************************************************************************/
   /********************************************************************************************************************/
   /*******************************************************************************************************************/
   
  if (agentTurn==true && !hint_window && ! request_window && ! reply_window && !gameOver && ! warning_window && ! repetition_window){
  
  
 var mycurrent:int=0;
 var myNextEdge:int=0;
 counterclick = counterclick+1;


  if(Num_of_Separate_regions(in_which_region(alan.transform.position), edgez_next[0]) <= Num_of_Separate_regions(in_which_region(alan.transform.position), edgez_next[1]) ){
  mycurrent=edgez[0];
  myNextEdge=edgez_next[0];
  agentCurrentRegion=edgez_next[0];
  region_checked[in_which_region(point1)]=1;
  region_checked[myNextEdge]=1;
  agentPoint1= region_point[myNextEdge];
  }
  
  else{
  mycurrent=edgez[1];
  myNextEdge=edgez_next[1];
  agentCurrentRegion=edgez_next[1];
  region_checked[in_which_region(point1)]=1;
  region_checked[myNextEdge]=1;
  agentPoint1= region_point[myNextEdge];
  }
           


   writeAgentSelected((in_which_region(agentPoint1)+1));
   Instantiate(pillar, agentPoint1, Quaternion.identity);
   
  if(!normalCase){
    middle(region_point[mycurrent],region_point[myNextEdge]); 	
    }
	
   vertex.Push(agentPoint1);
   points_ary.Push(agentPoint1);  
   
  
   walkpath_points(alan.transform, "step", alan.transform.position, agentPoint1);
 if(counterclick==2){
    point2=agentPoint1;
    middle(region_point[mycurrent],region_point[myNextEdge]);
 }
   if(counterclick>2){
      
    point1=which_farther(agentPoint1,point1,point2);
    point2=agentPoint1;
    middle(region_point[mycurrent],region_point[myNextEdge]);   
   } 
 
   points_ary.Push(Vector3.zero);                                               
 
  normalCase=true;
  agentTurn=false;
  edge_regions();
  StartCoroutine(show_request_window());
 }
   /************************************************************************************************************************/
   /***********************************************************************************************************************/
   /****************************************************** END AGENT TURN ************************************************/
   /*********************************************************************************************************************/
   /********************************************************************************************************************/
   /*******************************************************************************************************************/
                     
if(Input.GetKey("z")){

if(reason_window==true){
reason_window=false;
reason_button_clicked=false;
}

/*else if(show_window==true){
show_window=false;
}*/

else if(reply_window==true){
reply_window=false;
}

else if(feedback_window==true){
feedback_window=false;
}
else if(warning_window==true){
warning_window=false;
}

else if(repetition_window==true){
repetition_window=false;
}

else if( win11==true ){
win11=false;
help=false;
play=true;
coutn_finish=coutn_finish+1;
}

}

if(Input.GetKey("x") && show_window){
reason_window=true;
reason_button_clicked=true;
writeReasonButton(reason_button_clicked);
}

if(Input.GetKey("n")){

if(hint_window==true){
hint_window=false;
writeHintButton(request_window);
}

else if (show_window==true){
show_window=false;
human_reply=false;
human_reply_reject= human_reply_reject+1;
writeHumanReply(human_reply,"No. of rejection",human_reply_reject);
}

}

if(Input.GetKey("y")){

if(hint_window==true){
hint_window=false;
request_window=true;
writeHintButton(request_window);
}

else if (show_window==true){

show_window=false;
human_reply=true;
human_reply_accept= human_reply_accept+1;
writeHumanReply(human_reply, "No. of acceptance",human_reply_accept);
}

}

if(Input.GetKey("h")){

if(! help){
show_window=false;
reason_window=false;
feedback_window=false;
request_window=false;
reply_window=false;
hint_window=false;
warning_window=false;
repition_window=false;

win1=true;
help_counter++;
writeHelpButton(win1,help_counter);
}

}
   /************************************************************************************************************************/
   /***********************************************************************************************************************/
   /****************************************************** HUMAN TURN ****************************************************/
   /*********************************************************************************************************************/
   /********************************************************************************************************************/
   /*******************************************************************************************************************/

 	
 	if (Input.GetButtonDown ("Fire3")){
 		print("ok middle click");
 		
 		}
 /*******************************************************************************************************************/	
 	if (Input.GetButtonDown ("Fire1") && !agentTurn && ! show_window && ! reason_window && !request_window && ! reply_window && ! hint_window && !gameOver && ! warning_window && ! repetition_window && ! help && play) {
 	go=false;
		var ray : Ray = camera.ScreenPointToRay (Input.mousePosition);

		var hit : RaycastHit;
		if (Physics.Raycast (ray, hit)) 
		{ 
		 counterclick = counterclick+1;
		     
		        if (! firstClickFlag && ! normalCase) {
		        /* */
		        point1=region_point[which_region(hit.point)];
		        /**/
		        points_ary.Push(point1);
		        vertex.Push(point1);
		        firstClickFlag=true;
		        agentTurn=true;
		        
		        var y = Terrain.activeTerrain.SampleHeight(hit.point);
				var firePos = Vector3(region_point[in_which_region(hit.point)].x, y, region_point[in_which_region(hit.point)].z);
				Instantiate(pillar, firePos, Quaternion.identity);
				
		        human_checked_regions.Push(in_which_region(point1));
		        
			    writeHumanSelectedInitial((in_which_region(point1)+1) );
			  
			  go=true;	
		        }

		        else if(normalCase )
		        {
		        temp_hit=hit.point;
		    
		        /**/
		      	if(!check_violation(hit.point) && ! check_repetition(hit.point) ){	       
		        point3=region_point[which_region(hit.point)];
		        /**/
		     
		        points_ary.Push(point3);
		        vertex.Push(point3);
		        human_checked_regions.Push(in_which_region(point3));
		       
		        var yy = Terrain.activeTerrain.SampleHeight(hit.point);
				var firePoss = Vector3(region_point[in_which_region(hit.point)].x, yy, region_point[in_which_region(hit.point)].z);
				Instantiate(pillar, firePoss, Quaternion.identity);
				
		        writeHumanSelected((in_which_region(point3)+1),human_reply_region ,human_reply );
		       
		       agentTurn=true;
			   go=true;	
			   }	
		        }
                							
 			if( counterclick >= 2 && !check_violation(hit.point) && go){

 			   middle(nearedge, point3);
 			   point1= faredge;
			   point2= point3;
			                                
			   points_ary.Push(Vector3.zero);
			   
			   }
		}
		
	walkpath_points(FPC.transform, "playerstep", FPC.transform.position, hit.point);	
	
		if(go){
		 edge_regions();
		 if(normalCase){
		    give_feedback();
		    }
		go=false;
		hint_window=true;
		agentTurn=true;
		}
			  				     
	}

}
/*********************************************************************************************************************/
/*function middle(p1: Vector3, p2: Vector3){

		    middlepoint.x=(p1.x+p2.x)/2;
		    middlepoint.y=(p1.y+p2.y)/2;
		    middlepoint.z=(p1.z+p2.z)/2;
		    points_ary.Push(middlepoint);
		    Instantiate(pillar, middlepoint, Quaternion.identity);
		    
		    countermiddle = countermiddle+1;
		    if(Mathf.Abs(p1.x-p2.x)>.4){

		    middle(p1,middlepoint);
		    middle(middlepoint,p2);

		    }
		    		      
}*/
/*********************************************************************************************************************/
function middle(p1: Vector3, p2: Vector3){

		    middlepoint.x=(p1.x+p2.x)/2;
		    middlepoint.y=(p1.y+p2.y)/2;
		    middlepoint.z=(p1.z+p2.z)/2;
		    points_ary.Push(middlepoint);
		    
		   fence_direction=Instantiate(fence, middlepoint,Quaternion.identity);
		   
	if((in_which_region(p1)<in_which_region(p2)) && (in_which_region(p1)!=0 || in_which_region(p2)!=7)){
	fence_direction.transform.LookAt(GameObject.Find("f"+in_which_region(p1)).transform);
	print("1* fence between ="+ in_which_region(p1) +" and "+in_which_region(p2)+" lookAt "+in_which_region(p1));
	}	    
		    
	else if((in_which_region(p1)>in_which_region(p2)) && (in_which_region(p2)!=0 || in_which_region(p1)!=7)){
	fence_direction.transform.LookAt(GameObject.Find("f"+in_which_region(p2)).transform);
	print("2* fence between ="+ in_which_region(p1) +" and "+in_which_region(p2)+" lookAt "+in_which_region(p2));
	}	 
	
	else {
	fence_direction.transform.LookAt(GameObject.Find("f7").transform);
	print("3* fence between ="+ in_which_region(p1) +" and "+in_which_region(p2)+" lookAt 777777777777777");
	}
		    
		  
		    
		//    countermiddle = countermiddle+1;
		   /* if(Mathf.Abs(p1.x-p2.x)>.4){

		    middle(p1,middlepoint);
		    middle(middlepoint,p2);

		    }*/
  }
/*********************************************************************************************************************/
function showarray_zero(ar: Array)
{
counter=0;
for (var i = 0; i < ar.length; i++) {
  if (ar[i]== Vector3.zero) {
      counter = counter+1;
}

}

}

/*********************************************************************************************************************/
function showarray(ar: Array)
{
var strng="";
for (var i = 0; i < ar.length; i++) {
    strng+= " "+ i + "with value "+ ar[i];
}

}
/*********************************************************************************************************************/
function extendYLinecast(sequence: Array)
{
for (var s=0; s<sequence.length; s++)
{
sequence[s].y=sequence[s].y+2;
}
}
/******** function to get the most top, bottom, left and right point in the array of vertics of fire******/

function gt_fire_extremes(fire_ary: Array)
{
fire_big_X=fire_ary[0];
fire_small_X=fire_ary[0];
fire_big_Z=fire_ary[0];
fire_small_Z=fire_ary[0];
 for (var i = 0; i < fire_ary.length; i++)
  {
    
   if(fire_big_X.x<fire_ary[i].x)
    fire_big_X=fire_ary[i];
   }
  for (var j = 0; j < fire_ary.length; j++)
  {
  if(fire_small_X.x>fire_ary[j].x)
    fire_small_X=fire_ary[j];
  }
  
  for (var k = 0; k < fire_ary.length; k++)
  {
  if(fire_big_Z.z<fire_ary[k].z)
    fire_big_Z=fire_ary[k];
  }
  for (var l = 0; l < fire_ary.length; l++)
  {
  if(fire_small_Z.z>fire_ary[l].z)
    fire_small_Z=fire_ary[l];
  }

}

/**************function to get the most top, bottom, left and right point in the fire_aryray of vertics of Yernt*************************/
function gt_yernt_extremes(ext1: Vector3, ext2: Vector3, ext3: Vector3, ext4: Vector3)
{
ext_vertex.clear();
ext_vertex.Push(ext1);
ext_vertex.Push(ext2);
ext_vertex.Push(ext3);
ext_vertex.Push(ext4);

yernt_big_X=ext_vertex[0];
yernt_small_X=ext_vertex[0];
yernt_big_Z=ext_vertex[0];
yernt_small_Z=ext_vertex[0];

 for (var i = 0; i < ext_vertex.length; i++)
  {
    
   if(yernt_big_X.x<ext_vertex[i].x)
    yernt_big_X=ext_vertex[i];
   }
  for (var j = 0; j < ext_vertex.length; j++)
  {
  if(yernt_small_X.x>ext_vertex[j].x)
    yernt_small_X=ext_vertex[j];
  }
  
  for (var k = 0; k < ext_vertex.length; k++)
  {
  if(yernt_big_Z.z<ext_vertex[k].z)
    yernt_big_Z=ext_vertex[k];
  }
  for (var l = 0; l < ext_vertex.length; l++)
  {
  if(yernt_small_Z.z>ext_vertex[l].z)
    yernt_small_Z=ext_vertex[l];
  }
    
    
}
/*********************************** measure yernt length and width***************************************/
function gt_yernt_measure(){

yernt_length= yernt_big_X.x - yernt_small_X.x;
yernt_width= yernt_big_Z.z - yernt_small_Z.z;
}

/*************************************** function to measure which point is closer*******************************************/

function which_closer(tested:Vector3, p1:Vector3, p2:Vector3){

    Xdiff1= Mathf.Abs(p1.x - tested.x);
	Zdiff1= Mathf.Abs(p1.z - tested.z);
	
	Xdiff2= Mathf.Abs(p2.x - tested.x);
	Zdiff2= Mathf.Abs(p2.z - tested.z);
	
	totaldiff1= Xdiff1+Zdiff1;
	totaldiff2= Xdiff2+Zdiff2;
	
	if(totaldiff1 < totaldiff2)
	{
		//s="diff 1 = "  +totaldiff1+ "diff 2 = "+ totaldiff2+" closeest is first";
		return p1;
		
		//DrawLine(point1, worldPos, Color.green);
	}
	else
	{
		//s="diff 1 = " + totaldiff1+ "diff 2 = "+ totaldiff2+" closeest is second";
		return p2;
    }

}

/*************************************** function to measure which point is farther*******************************************/

function which_farther(tested:Vector3, p1:Vector3, p2:Vector3){

    Xdiff1= Mathf.Abs(p1.x - tested.x);
	Zdiff1= Mathf.Abs(p1.z - tested.z);
	
	Xdiff2= Mathf.Abs(p2.x - tested.x);
	Zdiff2= Mathf.Abs(p2.z - tested.z);
	
	totaldiff1= Xdiff1+Zdiff1;
	totaldiff2= Xdiff2+Zdiff2;
	
	if(totaldiff1 >= totaldiff2)
	{
		//s="diff 1 = "  +totaldiff1+ "diff 2 = "+ totaldiff2+" closeest is first";
		return p1;
		
		//DrawLine(point1, worldPos, Color.green);
	}
	else
	{
		//s="diff 1 = " + totaldiff1+ "diff 2 = "+ totaldiff2+" closeest is second";
		return p2;
    }

}

/*************************************** function to measure which point is closest*******************************************/

function which_closest(tested:Vector3, p1:Vector3, p2:Vector3, p3:Vector3, p4:Vector3){

    Xdiff1= Mathf.Abs(p1.x - tested.x);
	Zdiff1= Mathf.Abs(p1.z - tested.z);
	
	Xdiff2= Mathf.Abs(p2.x - tested.x);
	Zdiff2= Mathf.Abs(p2.z - tested.z);
	
	Xdiff3= Mathf.Abs(p3.x - tested.x);
	Zdiff3= Mathf.Abs(p3.z - tested.z);
	
	Xdiff4= Mathf.Abs(p4.x - tested.x);
	Zdiff4= Mathf.Abs(p4.z - tested.z);
	
	totaldiff1= Xdiff1+Zdiff1;
	totaldiff2= Xdiff2+Zdiff2;
	totaldiff3= Xdiff3+Zdiff3;
	totaldiff4= Xdiff4+Zdiff4;
	
	element_ary.clear();
	element_ary.Push(totaldiff1);
	element_ary.Push(totaldiff2);
	element_ary.Push(totaldiff3);
	element_ary.Push(totaldiff4);
	element_ary.Sort();

	if(element_ary[0] == totaldiff1)
	{
		return p1;
		
	}
	else if(element_ary[0] == totaldiff2)
	{
		return p2;
		
	}
	else if(element_ary[0] == totaldiff3)
	{
		return p3;
		
	}
	else if(element_ary[0] == totaldiff4)
	{
		return p4;
		
	}

}
/**********************************************************************************************************************************/

/*************************************** function to measure which point is farthest*******************************************/

function which_farthest_point(vrty:Array, edge:Vector3, rank:int){ //, rank:int

    
    Xdiff1= Mathf.Abs(vrty[0].x - edge.x);
	Zdiff1= Mathf.Abs(vrty[0].z - edge.z);
	
	Xdiff2= Mathf.Abs(vrty[1].x - edge.x);
	Zdiff2= Mathf.Abs(vrty[1].z - edge.z);
	
	Xdiff3= Mathf.Abs(vrty[2].x - edge.x);
	Zdiff3= Mathf.Abs(vrty[2].z - edge.z);
	
	Xdiff4= Mathf.Abs(vrty[3].x - edge.x);
	Zdiff4= Mathf.Abs(vrty[3].z - edge.z);
	
	totaldiff1= Xdiff1+Zdiff1;
	totaldiff2= Xdiff2+Zdiff2;
	totaldiff3= Xdiff3+Zdiff3;
	totaldiff4= Xdiff4+Zdiff4;
	
	farthest_ary.Clear();
	farthest_ary.Push(totaldiff1);
	farthest_ary.Push(totaldiff2);
	farthest_ary.Push(totaldiff3);
	farthest_ary.Push(totaldiff4);
	farthest_ary.Sort();

	if(farthest_ary[rank] == totaldiff1)
	{
	    print(" I will return farthest " +vrty[0]);
		return vrty[0];
		
	}
	else if(farthest_ary[rank] == totaldiff2)
	{
		 print(" I will return farthest " +vrty[1]);
		return vrty[1];
		
	}
	else if(farthest_ary[rank] == totaldiff3)
	{
		 print(" I will return farthest " +vrty[2]);
		return vrty[2];
		
	}
	else if(farthest_ary[rank] == totaldiff4)
	{
		 print(" I will return farthest " +vrty[3]);
		return vrty[3];
		
	}
}
/********************************** function to check if fire extremes cover yernt extremes **************************************/

function is_yernt_covered(){
gt_fire_extremes(vertex);

if( (fire_big_X.x > yernt_big_X.x) && (fire_small_X.x < yernt_small_X.x) && (fire_big_Z.z > yernt_big_Z.z) && (fire_small_Z.z < yernt_small_Z.z)){
return true;
}

}

/************************************** function to check if fire extremes hits yernt collider *****************************************/

function laser_hit_yernt(vrtx: Array){

var hity : RaycastHit;
for (var seq=0; seq<vrtx.length-1; seq++)
{

if(Physics.Linecast(Vector3(vrtx[seq].x, (vrtx[seq].y+1.5),vrtx[seq].z), Vector3(vrtx[seq+1].x, (vrtx[seq+1].y+1.5),vrtx[seq+1].z), hity)) {

Debug.DrawLine (Vector3(vrtx[seq].x, (vrtx[seq].y+1.5),vrtx[seq].z), Vector3(vrtx[seq+1].x, (vrtx[seq+1].y+1.5),vrtx[seq+1].z),Color.blue);

if(hity.collider.name=="yerntcollider")
{
print("ooops 3azala "+vrtx[seq]+ " and point "+vrtx[seq+1]);
yernt_detected=true;
}
}

}

if(Physics.Linecast(Vector3(vrtx[seq].x, (vrtx[seq].y+1.5),vrtx[seq].z), Vector3(vrtx[0].x, (vrtx[0].y+1.5),vrtx[0].z), hity)) {

Debug.DrawLine (Vector3(vrtx[seq].x, (vrtx[seq].y+1.5),vrtx[seq].z), Vector3(vrtx[0].x, (vrtx[0].y+1.5),vrtx[0].z),Color.blue);
if(hity.collider.name=="yerntcollider")
{
print("ooops 3azala "+vrtx[seq]+ " and point "+vrtx[0]);
yernt_detected=true;
}
  
}
return yernt_detected;
}

/**********************************************************************************************************************************/
function regions_in_middle(begin:int, end:int){

if(begin<=end){
for (b=begin; b<=end; b++){
region_checked[b]=1;

}
}
else if (end<=begin){
for (b=end; b<=begin; b++){
region_checked[b]=1;

}
}
}

/******************************************************** REGIONS *****************************************************************/
function which_region(p1:Vector3){

if ((p1.x > ext_corner4.x) && (p1.z> ext_corner4.z)){
// region 1
region_checked[0]=1;
current_region=0;
return current_region;
}

if ((p1.x > ext_corner3.x) && (p1.x< ext_corner4.x) && (p1.z> ext_corner4.z)){
// region 2
region_checked[1]=1;
current_region=1;
return current_region;
}

if ((p1.x < ext_corner3.x) && (p1.z> ext_corner3.z)){
// region 3
region_checked[2]=1;
current_region=2;
return current_region;
}

if ((p1.x < ext_corner3.x) && (p1.z < ext_corner3.z) && (p1.z> ext_corner1.z) ){
// region 4
region_checked[3]=1;
current_region=3;
return current_region;
}

if ((p1.x < ext_corner1.x) && (p1.z< ext_corner1.z)){
// region 5
region_checked[4]=1;
current_region=4;
return current_region;
}

if ((p1.x > ext_corner1.x) && (p1.x< ext_corner2.x) && (p1.z< ext_corner1.z)){
// region 6
region_checked[5]=1;
current_region=5;
return current_region;
}

if ((p1.x > ext_corner2.x) && (p1.z< ext_corner2.z)){
// region 7
region_checked[6]=1;
current_region=6;
return current_region;
}

if ((p1.x > ext_corner2.x) && (p1.z > ext_corner2.z) && (p1.z< ext_corner4.z)){
// region 
region_checked[7]=1;
current_region=7;
return current_region;
}
}

/********************************************************************************************************************/

/*************************************************** in which region ***********************************************/

function in_which_region(p1:Vector3){

if ((p1.x > ext_corner4.x) && (p1.z> ext_corner4.z)){
return 0;
}

if ((p1.x > ext_corner3.x) && (p1.x< ext_corner4.x) && (p1.z> ext_corner4.z)){
return 1;
}

if ((p1.x < ext_corner3.x) && (p1.z> ext_corner3.z)){
return 2;
}

if ((p1.x < ext_corner3.x) && (p1.z < ext_corner3.z) && (p1.z> ext_corner1.z) ){
return 3;
}

if ((p1.x < ext_corner1.x) && (p1.z< ext_corner1.z)){
return 4;
}

if ((p1.x > ext_corner1.x) && (p1.x< ext_corner2.x) && (p1.z< ext_corner1.z)){
return 5;
}

if ((p1.x > ext_corner2.x) && (p1.z< ext_corner2.z)){
return 6;
}

if ((p1.x > ext_corner2.x) && (p1.z > ext_corner2.z) && (p1.z< ext_corner4.z)){
return 7;
}

}
/**************************************************** next region ***************************************************/

function next_region (current:int){

if ( Num_of_Separate_regions(current, edgez_next[0]) <= Num_of_Separate_regions(current, edgez_next[1])){
region_checked[edgez_next[0]]=1;
return edgez_next[0];
}
else if(Num_of_Separate_regions(current, edgez_next[0]) > Num_of_Separate_regions(current, edgez_next[1])){
region_checked[edgez_next[1]]=1;
return edgez_next[1];
}
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////////**/


function next_region_NOT (currnt:int){

if ( Num_of_Separate_regions(currnt, edgez_next[0]) <= Num_of_Separate_regions(currnt, edgez_next[1])){
return edgez_next[0];
}
else if(Num_of_Separate_regions(currnt, edgez_next[0]) > Num_of_Separate_regions(currnt, edgez_next[1])){
return edgez_next[1];
}
else {
return -1;
}

}

/******************************************************** is the shape completed****************************************************************/
function is_game_over(){

var cont=0;
for(var i:int=0; i<region_checked.length;i++){
if(region_checked[i]==1){
cont++;
}

}

if(cont==8){
  gameOver_content= "We've done it. Thanks for your help. Now I can carry out my studies. \n\n";
  gameOver=true;
  middle(agentPoint1,point1);
}
}

/********************************************************* Alan request to human *****************************************************/

function show_request_window(){

is_game_over();
 
if(! gameOver){

   		dlg_str+="It is your turn.\nWhy don't you go to region ";
   		dlg_str+=" "+ (next_region_NOT(which_region(point1))+1); 
   		
   		human_reply_region= (next_region_NOT(in_which_region(point1))+1);
   		
   		proposed_regions.Push(next_region_NOT(which_region(point1)));
     	dlg_str+=" and I will go to region " + (next_region_NOT(which_region(agentPoint1))+1) + "\nWhat do you think?\n\n";
   		
   }		
   	    writeAgentRequestedRegion((next_region_NOT(in_which_region(point1))+1), (next_region_NOT(in_which_region(agentPoint1))+1));
   	   
   		window_content=dlg_str;
   		if (gameOver){
   		reason_content="We have completed our mission is traping the Yernt with fence, we can catch it now and do our biological tests \n";
   		}
   		else if(! gameOver){
   		reason_content=" I prefer you to go to region "+(next_region_NOT(which_region(point1))+1 +  " because I am closer to Region " + (next_region_NOT(which_region(agentPoint1))+1)+ ", and so I will save the time to move to the far region "+ (next_region_NOT(which_region(point1))+1) +"\nWhat do you think?\n\n\n");       
   		}
   		
   		reason_region.Push(next_region_NOT(which_region(point1)));

   		show_window=true;

   		yield WaitForSeconds(1.0f);
	      		
	    dlg_str="";	
}
/************************************************************************************************************************/
/*function create_markers(){

var marker_target= GameObject.Find("markerTarget/markerTarget");

//print("I found markerTarget = "+marker_target);

var lookAtFPC =  Vector3(FPC.transform.position.x, transform.position.y, FPC.transform.position.z);
var lookAtTarget =  Vector3(marker_target.transform.position.x, transform.position.y, marker_target.transform.position.z);

	
if(firstinst){

r1=Instantiate(region1, Vector3(marker_point[0].x, regions_height[0],marker_point[0].z),Quaternion.Inverse(marker_target.transform.rotation)); 
r2=Instantiate(region2, Vector3(marker_point[1].x, regions_height[1],marker_point[1].z),Quaternion.Inverse(marker_target.transform.rotation));
r3=Instantiate(region3, Vector3(marker_point[2].x, regions_height[2],marker_point[2].z),Quaternion.Inverse(marker_target.transform.rotation));
r4=Instantiate(region4, Vector3(marker_point[3].x, regions_height[3],marker_point[3].z),Quaternion.Inverse(marker_target.transform.rotation));
r5=Instantiate(region5, Vector3(marker_point[4].x, regions_height[4],marker_point[4].z),Quaternion.Inverse(marker_target.transform.rotation));
r6=Instantiate(region6, Vector3(marker_point[5].x, regions_height[5],marker_point[5].z),Quaternion.Inverse(marker_target.transform.rotation));
r7=Instantiate(region7, Vector3(marker_point[6].x, regions_height[6],marker_point[6].z),Quaternion.Inverse(marker_target.transform.rotation));
r8=Instantiate(region8, Vector3(marker_point[7].x, regions_height[7],marker_point[7].z),Quaternion.Inverse(marker_target.transform.rotation));
firstinst=false;

r1.transform.LookAt(target);
r2.transform.LookAt(target);
r3.transform.LookAt(target);
r4.transform.LookAt(target);
r5.transform.LookAt(target);
r6.transform.LookAt(target);
r7.transform.LookAt(target);
r8.transform.LookAt(target);
//GameObject.Find("region1(Clone)").transform.LookAt(lookAtTarget);
//GameObject.Find("region2(Clone)").transform.LookAt(lookAtTarget);
//GameObject.Find("region3(Clone)").transform.LookAt(lookAtTarget);
//GameObject.Find("region4(Clone)").transform.LookAt(lookAtTarget);

}

if (! firstinst){

Destroy(r1);
Destroy(r2);
Destroy(r3);
Destroy(r4);
Destroy(r5);
Destroy(r6);
Destroy(r7);
Destroy(r8);

r1=Instantiate(region1, Vector3(marker_point[0].x, regions_height[0],marker_point[0].z),Quaternion.Inverse(marker_target.transform.rotation));
r2=Instantiate(region2, Vector3(marker_point[1].x, regions_height[1],marker_point[1].z),Quaternion.Inverse(marker_target.transform.rotation));
r3=Instantiate(region3, Vector3(marker_point[2].x, regions_height[2],marker_point[2].z),Quaternion.Inverse(marker_target.transform.rotation));
r4=Instantiate(region4, Vector3(marker_point[3].x, regions_height[3],marker_point[3].z),Quaternion.Inverse(marker_target.transform.rotation));
r5=Instantiate(region5, Vector3(marker_point[4].x, regions_height[4],marker_point[4].z),Quaternion.Inverse(marker_target.transform.rotation));
r6=Instantiate(region6, Vector3(marker_point[5].x, regions_height[5],marker_point[5].z),Quaternion.Inverse(marker_target.transform.rotation));
r7=Instantiate(region7, Vector3(marker_point[6].x, regions_height[6],marker_point[6].z),Quaternion.Inverse(marker_target.transform.rotation));
r8=Instantiate(region8, Vector3(marker_point[7].x, regions_height[7],marker_point[7].z),Quaternion.Inverse(marker_target.transform.rotation));
r1.transform.LookAt(target);
r2.transform.LookAt(target);
r3.transform.LookAt(target);
r4.transform.LookAt(target);
r5.transform.LookAt(target);
r6.transform.LookAt(target);
r7.transform.LookAt(target);
r8.transform.LookAt(target);
//GameObject.Find("region1(Clone)").transform.LookAt(lookAtTarget);
//GameObject.Find("region2(Clone)").transform.LookAt(lookAtTarget);
//GameObject.Find("region3(Clone)").transform.LookAt(lookAtTarget);
//GameObject.Find("region4(Clone)").transform.LookAt(lookAtTarget);
}
}*/
/************************************************************************************************************************/
/*function adjust_marker_rotation(){

var lookAtFPC = Vector3(FPC.transform.position.x, transform.position.y, FPC.transform.position.z);
GameObject.Find("region1(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region2(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region3(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region4(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region5(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region6(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region7(Clone)").transform.LookAt(lookAtFPC);
GameObject.Find("region8(Clone)").transform.LookAt(lookAtFPC);
//transform.LookAt(lookAtFPC);

}*/
/************************************************************************************************************************/
function adjust_marker_height(origin:int){


var terrainHeight = Terrain.activeTerrain.SampleHeight(GameObject.Find("NewYernt").transform.position);
//print("terrainHeight= "+terrainHeight+ " and origin = "+origin);

/*for(var i:int=((origin-1)+8)%8;i<=((origin+1)+8)%8;i++){
//regions_height[(i%8)]=lowHeight;
markers_ary[(i%8)].transform.position.y=lowHeight;
print("region "+(i%8)+"=>y = "+lowHeight);

}*/
markers_ary[(((origin-1)+8)%8)].transform.position.y=lowHeight;
markers_ary[((origin+8)%8)].transform.position.y=lowHeight;
markers_ary[(((origin+1)+8)%8)].transform.position.y=lowHeight;

//regions_height[((origin-2)+8)%8] = midHeight;
markers_ary[((origin-2)+8)%8].transform.position.y=midHeight;
//print("region "+((origin-2)+8)%8+"=>y = "+midHeight);
//regions_height[((origin+2)+8)%8]=midHeight;

markers_ary[((origin+2)+8)%8].transform.position.y=midHeight;
//print("region "+((origin+2)+8)%8+"=>y = "+midHeight);

for(var j:int=(origin+3);j<=(origin+5);j++){
//regions_height[(j%8)]=highHeight;
markers_ary[j%8].transform.position.y = highHeight;
//print("region "+(j%8)+"=>y = "+highHeight);
}
//print("***********************************************************");

}

/************************************************************************************************************************/
function adjust_marker_rotation(){

/*GameObject.Find("region1(Clone)").transform.LookAt(target);
print(" find region1 = "+ GameObject.Find("region1(Clone)"));

GameObject.Find("region2(Clone)").transform.LookAt(target);
GameObject.Find("region3(Clone)").transform.LookAt(target);
GameObject.Find("region4(Clone)").transform.LookAt(target);
GameObject.Find("region5(Clone)").transform.LookAt(target);
GameObject.Find("region6(Clone)").transform.LookAt(target);
GameObject.Find("region7(Clone)").transform.LookAt(target);
GameObject.Find("region8(Clone)").transform.LookAt(target);*/

}
/************************************************************************************************************************/
function Num_of_Separate_regions(startNum:int, endNum:int){
var Num:int=0;

if( endNum>=startNum ){
if((endNum-startNum)>=4){

Num= 4-((endNum-startNum)%4);

return Num;

}
else if((endNum-startNum)<4 ){

Num= (endNum-startNum)%4;

return Num;

}

}

/**/
if( startNum > endNum){
if( (startNum - endNum)>=4 ){

Num= 4-((startNum - endNum)%4);

return Num;

}

else if( (startNum - endNum) < 4 ){

Num= (startNum - endNum)%4;

return Num;

}
	
}

}
/************************************************************************************************************************/
function edge_regions(){

var edges= new Array();
var edges_next= new Array();

for(var i:int=0;i<region_checked.length;i++){

if(region_checked[i]==0 && (region_checked[i]!=region_checked[(i+1)%8])){
edges_next.Push(i);
edges.Push((i+1)%8);

}

else if(region_checked[i]==1 && (region_checked[i]!=region_checked[(i+1)%8])){
edges.Push(i);
edges_next.Push((i+1)%8);
}

}

if(edges.length==0){
edgez[0]=edgez[1]=0;
}

else if(edges.length==2){
edgez[0]=edges[0];
edgez[1]=edges[1];

edgez_next[0]=edges_next[0];
edgez_next[1]=edges_next[1];

}

}
/************************************************************************************************************************/
function processing_human_request(){

reply_content="";
var temp_mycurrent=0;
var temp_farside=0;

countMatch.Clear();
countMismatch.Clear();

var strMatch="";
var strMismatch_selected_before="";
var strMismatch="";
var selectionNo:int=0;
  
  temp_mycurrent=next_region_NOT(agentCurrentRegion);
  if(temp_mycurrent==edgez_next[0]){
  temp_farside=edgez_next[1];
  }
  else{
  temp_farside=edgez_next[0];
  }

for (var i=0; i<human_requested_region.length;i++){

if (human_requested_region[i]==1){

selectionNo++;
writeHumanRequestedRegions((i+1));

if(i==temp_mycurrent){
countMatch.Push(i);
}
else if (i!=temp_mycurrent){
countMismatch.Push(i);
}

}
}
/**/
/**/
is_region_selected_before();
/**/
/**/


if(regions_selected_before.length==1){
strMismatch_selected_before += " "+(regions_selected_before[0]+1);
}

else if(regions_selected_before.length==2){
strMismatch_selected_before += " "+(regions_selected_before[0]+1)+ " and "+(regions_selected_before[1]+1);
}

else if(regions_selected_before.length>2){
for(var w=0; w < (regions_selected_before.length-1); w++){
strMismatch_selected_before += " "+(regions_selected_before[w]+1)+ " ,";
}
strMismatch_selected_before += " and "+(regions_selected_before[(regions_selected_before.length-1)]+1);

}
/**/
/******/

if (countMatch.length>0){
reply_content+="☺ Wow, The requested region "+ (countMatch[0]+1)+ " is what I was thinking about. \n";

}

for(var j:int=0;j<regions_NOT_selected_before.length;j++){

if(regions_NOT_selected_before[j]==temp_farside){

reply_content+="☺ The requested region "+ (temp_farside+1)+ " is possible choice but far to go to. \n";

regions_NOT_selected_before.RemoveAt(j);
}
}

/**/
if(regions_NOT_selected_before.length==1){
strMismatch += " "+(regions_NOT_selected_before[0]+1);
}

else if(regions_NOT_selected_before.length==2){
strMismatch += " "+(regions_NOT_selected_before[0]+1)+ " and "+(regions_NOT_selected_before[1]+1);
}

else if(regions_NOT_selected_before.length>2){
for(var q=0; q < (regions_NOT_selected_before.length-1); q++){
strMismatch += " "+(regions_NOT_selected_before[q]+1)+ " ,";
}
strMismatch += " and "+(regions_NOT_selected_before[(regions_NOT_selected_before.length-1)]+1);

}

/**/
if(regions_selected_before.length>0){
if(regions_selected_before.length==1){
reply_content+= "☺ Your proposed region "+ strMismatch_selected_before+ " has already been taken before.\n";
}
else if(regions_selected_before.length >1){
reply_content+= "☺ Your proposed regions"+ strMismatch_selected_before+ " have already been taken before.\n";
}

}

/**/
if(regions_NOT_selected_before.length>0){
if(regions_NOT_selected_before.length==1){
reply_content+= "☺ Well, your proposed region "+ strMismatch+ " is not possible because it is not directly connecrted to edge region.\n\n\n\n";
}
else if(regions_NOT_selected_before.length >1){
reply_content+= "☺ Well, your proposed regions"+ strMismatch+ " are not possible because they are not directly connecrted to edge region.\n\n\n\n\n";
}

}

if(selectionNo==0){
reply_content+="☺ You did not make any suggestion\n\n";
}
/**/
zero_array();
reply_window=true;
}

/************************************************************************************************************************/
function is_region_selected_before(){

regions_NOT_selected_before.Clear();
regions_selected_before.Clear();

for(var i:int=0; i < countMismatch.length;i++){
if(region_checked[countMismatch[i]]==0){
regions_NOT_selected_before.Push(countMismatch[i]);
}
else if(region_checked[countMismatch[i]]==1){
regions_selected_before.Push(countMismatch[i]);
} 

}

}

/************************************************************************************************************/
function zero_array(){

for (var i=0;i<human_requested_region.length;i++){
human_requested_region[i]=0;

}
}
/***********************************************************************/
function walkpath_points(body:Transform, group: String, start: Vector3, end:Vector3){

var startRegion : int =in_which_region(start);
var endRegion : int =in_which_region(end);

//print("I am going to move "+ body+" from regions "+ startRegion+" to "+endRegion);

alan.GetComponent(Alan_animation).WalkPath(body, group, startRegion, endRegion);

}
/***********************************************************************/