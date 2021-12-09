var corner1: Vector3;
var corner2: Vector3;
var corner3: Vector3;
var corner4: Vector3;
var fire : Transform;

function Start () {

}

function Update () {


corner1= GameObject.Find("yerntcorner1").transform.position;
corner2= GameObject.Find("yerntcorner2").transform.position;
corner3= GameObject.Find("yerntcorner3").transform.position;
corner4= GameObject.Find("yerntcorner4").transform.position;

//if(corner4!= Vector3.zero)
//Instantiate(fire, corner4, Quaternion.identity);
}