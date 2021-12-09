
var target: GameObject;

function Strat(){
//print("in the stract of region 1 billboard");
}

function Update () {
target=GameObject.Find("firstPersonController");

//print("Inside lookAttarget, I found target = "+target);
var lookAtPos = Vector3(target.transform.position.x, transform.position.y, target.transform.position.z);

//print("looAt FPC = "+ lookAtPos);
transform.LookAt(lookAtPos);
//transform.RotateAround(transform.position, Vector3(0,1,1) , 45);
}