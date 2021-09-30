var canvas  = new fabric.Canvas("my_canvas");

var player_x = 10;
var player_y = 10;

var block_width_img = 30;
var block_height_img = 30;

var player_object = "" ;
var block_img_object = "" ; 

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(130);
        player_object.set({
            top: player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img,function(Img) {
        block_img_object = Img ;
        block_img_object.scaleToWidth(block_width_img);
        block_img_object.scaleToHeight(block_height_img);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}