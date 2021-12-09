var FPC: Transform;

function Update () {

FPC = GameObject.Find("firstPersonController").transform;
transform.position=FPC.position;
//print(" movewithFPC "+ transform.position);

}