var laser1:Vector3;
var laser2:Vector3;
var pillar: Transform;
var clone1: Transform;
var clone2: Transform;

laser1.x=110.1055;
laser1.y=30.83275;
laser1.z=76.38515;

laser2.x=104.0045;
laser2.y=32.26679;
laser2.z=82.48505;
function Start() {

clone1 =Instantiate(pillar,laser1,Quaternion.identity); 
clone2=Instantiate(pillar,laser2,Quaternion.identity); 

}
function Update () {
var hit : RaycastHit;

if(!Physics.Linecast(clone1.transform.position, clone2.transform.position, hit)) {
print("there is no collider");
Debug.DrawLine (laser1, laser2,Color.red);
}
else
{
Debug.DrawLine (clone1.transform.position, clone2.transform.position,Color.blue);
//if(hit.collider.tag=="yernt")
//{
print("hit something "+ hit.collider.gameObject.tag);
//}


}
}

//Debug.DrawLine (transform.position, GameObject.FindGameObjectWithTag("laser2").transform.position,Color.red);