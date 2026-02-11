interface Point
{
    x: number;
    y: number;
}

export class Sphere
{
    _element!: HTMLElement;
    _color: string;

    radius: number;

    position: Point;
    velocity: Point;

    constructor(radius: number, position: Point, velocity: Point)
    {
        this._color = "#007FFF";
        this.radius = radius;

        this.position = position;
        this.velocity = velocity;
    }

    changeColor(color: string): void
    {
        this._color = color;

        this._element.style.backgroundColor = color;
    }

    update(delta: number): void
    {
        this.position.x += this.velocity.x * delta;
        this.position.y += this.velocity.y * delta;

        this._element.style.left = `${this.position.x}px`;
        this._element.style.top = `${this.position.y}px`;
    }

    setHtmlElement(element: HTMLElement)
    {
        this._element = element;
    }
}
