
function meteorCalculation(velocity, radius, angle, density) {
    // velocity NEEDS TO BE (m/s) - input from function is in km/s
    // radius (m)
    // angle of impact (°)
    // density NEEDS TO BE (kg/m^3) - Input from function is in g/cm^2

    velocity = velocity * 1000;
    density = density * 1000

    angle_rad = angle * (Math.PI / 180)


    const mass = 4/3 * Math.PI * radius**3 * density
    const energy = (1/2 * mass * velocity**2 * Math.sin(angle_rad)) / (4.184 * 10**12)
    const crater = 0.07 * 1.3 * (energy * (density/2650))**(1/3.4)
    const wave = 0.07 * 1.3 * (energy * (density/1000))**(1/3.4)

    const crater_area = Math.PI * crater**2 / 2
    const wave_area = Math.PI * wave**2 / 2

    const crater_angular_radius = (crater / 40075) * 360;
    const wave_angular_radius = (crater_area / 40075) * 360;


    return {
        "mass": mass,
        "energy": energy,
        "crater": crater,
        "wave": wave,
        "crater_area": crater_area,
        "crater_angular_radius": crater_angular_radius,
        "wave_angular_radius": wave_angular_radius,
        "wave_area": wave_area
    }
}
