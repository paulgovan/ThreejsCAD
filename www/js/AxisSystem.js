var AxisSystem = function(masterCamera, masterControls){
	// Configuration
	CANVAS_WIDTH  = 100;
	CANVAS_HEIGHT = 100;
	CAM_DISTANCE  = 300;

	init();

	function init(){
		// DOM element
		axisContainer = document.createElement("div");
		axisContainer.style.width=CANVAS_WIDTH;
		axisContainer.style.height=CANVAS_HEIGHT;
		//axisContainer.style.background="#ffffff";
		//axisContainer.style.border="1px solid black";
		//axisContainer.style.margin="20px";
		//axisContainer.style.padding="0px";
		axisContainer.style.position="absolute";
		axisContainer.style.left="0px";
		axisContainer.style.bottom="0px";
		axisContainer.style.zindex="100";
		//axisContainer.style.opacity="0.9";
		document.body.appendChild(axisContainer);

		// Renderer
		axisRenderer = new THREE.CanvasRenderer();
		axisRenderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
		axisContainer.appendChild(axisRenderer.domElement);

		// Scene
		axisScene = new THREE.Scene();

		// Camera
		axisCamera = new THREE.PerspectiveCamera(50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000);
		axisCamera.up = masterCamera.up;
		axisScene.add(axisCamera);

		// Axes
		axisHelper = new THREE.AxisHelper();
		axisScene.add(axisHelper);
	}

	// Public methods
	//----------------
	this.render = function(){
		axisRenderer.render(axisScene, axisCamera);
	}

	this.animate = function(){
		axisCamera.position.sub(masterCamera.position, masterControls.target);
		axisCamera.position.setLength(CAM_DISTANCE);
		axisCamera.lookAt(axisScene.position);
	}
}

