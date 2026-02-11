import { Simulation } from "./simulation";

function main(): void
{
    const simulation = new Simulation();

    simulation.initialize();
    simulation.start();
}

main();
