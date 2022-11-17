import * as THREE from "three";
import Experience from "../Experience.js";

export default class Bike {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.bike = this.resources.items.bike;
        this.actualBike = this.bike.scene;

        console.log(this.bike);
        console.log(this.actualBike);
        this.setModel();
    }

    setModel() {
        // Shadows
        this.actualBike.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }
        });
        this.scene.add(this.actualBike);
    }

    resize() {}

    update() {}
}
