import { Sphere } from "./sphere";

export class Simulation
{
    _prevTime: number;

    _width: number;
    _height: number;

    _spheres: Sphere[];

    constructor()
    {
        this._prevTime = 0;

        this._width = window.innerWidth;
        this._height = window.innerHeight;

        this._spheres = [];
    }

    _update = () =>
    {
        const time = Date.now();
        const delta = time - this._prevTime;

        for (const sphere of this._spheres)
        {
            sphere.update(delta);

            if ((sphere.position.x < 0) && (sphere.velocity.x < 0))
            {
                sphere.velocity.x *= -1;
            }
            if ((sphere.position.x > this._width) && (sphere.velocity.x > 0))
            {
                sphere.velocity.x *= -1;
            }

            if ((sphere.position.y < 0) && (sphere.velocity.y < 0))
            {
                sphere.velocity.y *= -1;
            }
            if ((sphere.position.y > this._height) && (sphere.velocity.y > 0))
            {
                sphere.velocity.y *= -1;
            }
        }

        this._prevTime = time;

        requestAnimationFrame(this._update);
    };

    initialize(): void
    {
        const sphereElements = document.getElementsByClassName("sphere");

        for (const sphereElement of sphereElements)
        {
            const radius = Math.floor(Math.random() * 100) + 10;
            const position = {
                x: Math.floor(Math.random() * this._width),
                y: Math.floor(Math.random() * this._height)
            };

            const velocity = {
                x: Math.random(),
                y: Math.random()
            };

            const sphere = new Sphere(radius, position, velocity);
            sphere.setHtmlElement(sphereElement as HTMLElement);

            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            sphere.changeColor(`rgb(${r}, ${g}, ${b})`);

            this._spheres.push(sphere);
        }
    }

    start()
    {
        this._prevTime = Date.now();

        requestAnimationFrame(this._update);
    }
}
