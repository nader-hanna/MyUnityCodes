var FPC: Transform;

function Strat(){

}

function Update () {

FPC = GameObject.Find("firstPersonController").transform;

var lookAtPos =  Vector3(FPC.position.x, transform.position.y, FPC.position.z);

transform.LookAt(lookAtPos );

}