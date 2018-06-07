var spriteObject =
{
	sourceX: 0,
	sourceY: 0,
	sourceWidth: 64,
	sourceHeight: 64,
	x: 0,
	y: 0,
	width: 64,
	height: 64,
	//Стороны спрайта
	left: function()
	{
		return this.x;
	},
	right: function()
	{
		return this.x + this.width;
	},
	top: function()
	{
		return this.y;
	},
	bottom: function()
	{
		return this.y + this.height;
	},
	//Геттеры
	centerX: function()
	{
		return this.x + (this.width / 2);
	},
	centerY: function()
	{
		return this.y + (this.height / 2);
	},
	halfWidth: function()
	{
		return this.width / 2;
	},
	halfHeight: function()
	{
		return this.height / 2;
	}

};

var messageObject =
{
	x: 0,
	y: 0,
	visible: true,
	text: "Message",
	font: "normal bold 20px Helvetica",
	fillStyle: "red",
	textBaseline: "top"
};

var alienObject = Object.create(spriteObject);
alienObject.NORMAL = 1;
alienObject.EXPLODED = 2;
alienObject.state = alienObject.NORMAL;
alienObject.update = function()
{
	if (this.state == this.EXPLODED)
	{
		this.sourceX = 192;
		this.sourceY = 0;
		this.width = 128;
		this.height = 128;
		this.sourceWidth = 128;
		this.sourceHeight = 128;
		this.x -= 32;
		this.y -= 32;
	}
};
