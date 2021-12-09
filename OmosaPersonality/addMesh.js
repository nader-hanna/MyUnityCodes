var size : float;
function Awake()
{
     var m : Mesh = new Mesh();
     m.name = "Scripted_Plane_New_Mesh";
     m.vertices = [Vector3(-size, -size, 0.01), Vector3(size, -size, 0.01), Vector3(size, size, 0.01), Vector3(-size, size, 0.01) ];
     m.uv = [Vector2 (0, 0), Vector2 (0, 1), Vector2(1, 1), Vector2 (1, 0)];
     m.triangles = [0, 1, 2, 0, 2, 3];
     m.RecalculateNormals();
     var obj : GameObject = new GameObject("New_Plane_Fom_Script", MeshRenderer, MeshFilter, MeshCollider);
     obj.GetComponent(MeshFilter).mesh = m;
}