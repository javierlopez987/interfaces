class ImageCircle extends Circle {
    constructor(posX, posY, radius, fill, ctx) {
        super(posX, posY, radius, fill, ctx);
    }

    draw() {
        this.ctx.save();
        let circlePath = new Path2D();
        circlePath.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.clip(circlePath);

        let width = this.radius * 2;
        let height = this.radius * 2;
        let img_width = this.fill.width;
        let img_height = this.fill.height;
        let aspect_ratio = (1.0 * height) / width;
        let aspect_ratio_img = (1.0 * img_height) / img_width;
        if(aspect_ratio_img <= aspect_ratio && width < img_width) {
            height = width * aspect_ratio_img;
        } else if(aspect_ratio_img > aspect_ratio && height < img_height){
            if(height * aspect_ratio_img <= width) {
                width = height * aspect_ratio_img;
            } else {
                height = width / aspect_ratio_img;
            }
        } else {
            width = img_width;
            height = img_height;
        }

        this.ctx.drawImage(this.fill, this.posX - this.radius, this.posY - this.radius, width, height);
        this.ctx.restore();
    }
}