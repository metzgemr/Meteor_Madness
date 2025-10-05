
function meteorCalculation(velocity, radius, angle, density) {
    // velocity (m/s)
    // radius (m)
    // angle of impact (°)
    // density (kg/m^3)

    angle_rad = angle * (Math.PI / 180)


    const mass = 4/3 * Math.PI * radius**3 * density
    const energy = (1/2 * mass * velocity**2 * Math.sin(angle_rad)) / 4.184 * 10**12
    const crater = 0.07 * 1.3 * (energy * (density/2650))**(1/3.4) / 1000
    const wave = 0.07 * 1.3 * (energy * (density/1000))**(1/3.4) / 1000

    const crater_area = math.pi * crater**2 / 2
    const wave_area = math.pi * wave**2 / 2

    return {
        "mass": mass,
        "energy": energy,
        "crater": crater,
        "wave": wave,
        "crater_area": crater_area,
        "wave_area": wave_area
    }
}
