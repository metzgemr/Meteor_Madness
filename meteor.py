import math

def main():
      velocity = int(input("velocity (m/s): ").strip())
      radius = int(input("radius (m): ").strip())
      angle = int(input("angle of impact (°): ").strip())
      density = int(input("density (kg/m^3): ").strip())

      angle_rad = math.radians(angle)

      mass = 4/3 * math.pi * radius**3 * density
      energy = (1/2 * mass * velocity**2 * math.sin(angle_rad)) / (4.184 * 10**12)
      crater = 0.07 * 1.3 * (energy * (density/2650))**(1/3.4)
      wave = 0.07 * 1.3 * (energy * (density/1000))**(1/3.4)

      crater_area = math.pi * crater**2 / 2
      wave_area = math.pi * wave**2 / 2

      sn_energy, energy_count = scientific_notation(energy)
      sn_crater, crater_count = scientific_notation(crater)
      sn_crater_area, crater_area_count = scientific_notation(crater_area)
      sn_wave, wave_count = scientific_notation(wave)
      sn_wave_area, wave_area_count = scientific_notation(wave_area)

      energy_count = is_0(energy_count)
      crater_count = is_0(crater_count)
      crater_area_count = is_0(crater_area_count)
      wave_count = is_0(wave_count)
      wave_area_count = is_0(wave_area_count)

      print(f"The impact energy is {(sn_energy):.2f}{energy_count} kilotons of TNT. If it hits land, the crater would have a"
            f" {(sn_crater):.2f}{crater_count} km diameter ({sn_crater_area:.2f}{crater_area_count} km^2). If its hit water, "
            f"the tsunami wave would cover a {(sn_wave):.2f}{wave_count} km diameter circle ({sn_wave_area:.2f}{wave_area_count} km^2).")

      kinetic_impact = int(input("Enter the kinetic impact angle (°): "))
      kinetic_rad = math.radians(kinetic_impact)

      delta = ((10**9)**2 * velocity * 610 * math.sin(kinetic_rad) * 10000 * (1+ (610 * 10000) / (mass * velocity))) / (6.63759135 * 10**22)
      minimum = (10**9 - radius - (angle_rad/math.pi) * 12756274) / (10**3)

      if delta >= minimum:
           word = "Success!"
      else:
           word = "Fail."
      print(f"{word} The asteroid's semi-major axis changed by {delta:.0f}km, the minimum change needed was {minimum:.0f}km.")

def scientific_notation(s):
    count = 0
    while s > 10:
        s = s / 10
        count += 1
    return s, count

def is_0(s):
     if s <= 0:
          t = ""
     else:
          t = f"*10^{s}"
     return t

if __name__ == "__main__":
     main()
