var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var lengthOfLineRenderer : int = 20;

function Start() {
     var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
     lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
     lineRenderer.SetColors(c1, c2);
     lineRenderer.SetWidth(0.2,0.2);
     lineRenderer.SetVertexCount(lengthOfLineRenderer);
}

function Update() {
    var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    for(var i : int = 0; i < lengthOfLineRenderer; i++) {
        var pos : Vector3 = Vector3(i * 0.5, Mathf.Sin(i + Time.time), 0);
        lineRenderer.SetPosition(i, pos);
    }
}