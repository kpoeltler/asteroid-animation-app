import React from "react";
import "../..//main.css";

const Animation = () => (
  
  <div>
        <h1 class="logo" data-component="Logo">
            Explore Your Universe
            <span>Asteroids</span>
        </h1>
        <input class="planet5" id="jupiter" name="planet" type="radio" data-component="Planet5" />
        <label class="jupiter menu" for="jupiter" data-component="Jupiter Menu">
            <div class="preview" data-component="Preview"></div>
            <div class="info" data-component="Info">
                <h2>
                    <div class="pip" data-component="Pip"></div>
                    Jupiter
                </h2>
                <h3>Trojans</h3>
                <h3>Asteroid Belt</h3>
            </div>
        </label>
        <input checked="checked" class="planet4" id="mars" name="planet" type="radio" data-component="Planet4"/>
        <label class="menu mars" for="mars" data-component="Menu Mars">
            <div class="preview" data-component="Preview"></div>
            <div class="info" data-component="Info">
                <h2>
                    <div class="pip" data-component="Pip"></div>
                    Mars
                </h2>
                <h3>Amors</h3>
            </div>
        </label>
        <input checked="checked" class="planet3" data-component="Planet3" id="earth" name="planet" type="radio"/>
        <label class="menu earth" data-component="Menu Earth" for="earth">
            <div class="preview" data-component="Preview"></div>
            <div class="info" data-component="Info">
                <h2>
                    <div class="pip" data-component="Pip"></div>
                    Earth
                </h2>
                <h3>Apollo Asteroids</h3>
                <h3> PHO Asteroids</h3>
            </div>
        </label>

        <input checked="checked" class="planet2" data-component="Plant2" id="venus" name="planet" type="radio"/>
        <label class="menu venus" for="venus" data-component="Menu Venus">
            <div class="preview" data-component="Preview"></div>
            <div class="info" data-component="Info">
                <h2>
                    <div class="pip" data-component="Pip"></div>
                    Venus
                </h2>
                <h3>Aten Asteroids</h3>
            </div>
        </label>
        <input checked="checked" class="planet1" data-component="Planet1" id="mercury" name="planet" type="radio"/>
        <label class="menu mercury" for="mercury" data-component="Menu Mercury">
            <div class="preview" data-component="Preview"></div>
            <div class="info" data-component="Info">
                <h2>
                    <div class="pip" data-component="Pip"></div>
                    Mercury
                </h2>
                <h3>testing</h3>
            </div>
        </label>
        <div class="solar" data-component="Solar">
            <div class="solar_systm" data-component="SolarSystm">
                <div class="planet mercury" data-component="Planet Mercury">
                    <div class="planet_description mercury" data-component="PlanetDescription Mercury">
                        <h2>Planet</h2>
                        <h1>Mercury</h1>
                        <p>The closest planet to the sun. It circles the sun faster than all the other planets, which is why
                            Romans named it after their swift-footed messenger god.</p>
                        <label for='readMercury'>
                            <a>
                                Read Mor
                                <span>e</span>
                            </a>
                        </label>
                    </div>
                    <div class="overlay" data-component="Overlay"></div>
                </div>
            </div>
            <div class="solar_systm" data-component="SolarSystm">
                <div class="planet venus" data-component="Planet Venus">
                    <div class="moon triton" data-component="Moon Triton">
                        <h3>Asteroids</h3>
                        <h2>Triton</h2>
                    </div>
                    <div class="moon proteus" data-component="Moon Proteus">
                        <h3> Moon/Asteroid</h3>
                        <h2>Proteus</h2>
                    </div>
                    <div class="moon nereid" data-component="Moon Nereid">
                        <h3>Asteroids</h3>
                        <h2>300 are known</h2>
                    </div>
                    <div class="trajectory tri" data-component="Trajectory Tri"></div>
                    <div class="trajectory pro" data-component="Trajectory Pro"></div>
                    <div class="trajectory ner" data-component="Trajectory Ner"></div>
                    <div class="planet_description v" data-component="PlanetDescription V">
                        <h2>Planet</h2>
                        <h1>Venus</h1>
                        <p>Aten Asteroids orbit between Venus and Earth. Three hundred have been detected, but they are hidden
                            by the Sun and so are hard to**** stars, the evening star and the morning star.</p>
                        <label for='readVenus'>
                            <a>
                                Read Mor
                                <span>e</span>
                            </a>
                        </label>
                    </div>
                    <div class="overlay" data-component="Overlay"></div>
                </div>
            </div>
            <div class="solar_systm" data-component="SolarSystm">
                <div class="planet earth" data-component="Planet Earth">
                    <div class="moon emoon" data-component="Moon EMoon">
                        <h3>Asteroid</h3>
                        <h2>Aten</h2>
                    </div>
                    <div class="trajectory m"></div>
                    <div class="planet_description earth" data-component="PlanetDescription Earth">
                        <h2>Planet</h2>
                        <h1>Earth</h1>
                        <p>Earth, our home. It is the only planet known to have an atmosphere containing free oxygen, oceans
                            of liquid water on its surface, and, of course, life.</p>
                        <label for='readEarth'>
                            <a>
                                Read Mor
                                <span>e</span>
                            </a>
                        </label>
                    </div>
                    <div class="overlay" data-component="Overlay"></div>
                </div>
            </div>
            <div class="solar_systm" data-component="SolarSystm">
                <div class="planet mars" data-component="Planet Mars">
                    <div class="moon deimos" data-component="Moon Deimos">
                        <h3>Moon/Asteroid</h3>
                        <h2>Deimos</h2>
                    </div>
                    <div class="trajectory d" data-component="Trajectory D"></div>
                    <div class="moon phoebos" data-component="Moon Phoebos">
                        <h3>Moon/Asteroid</h3>
                        <h2>Phoebos</h2>
                    </div>
                    <div class="trajectory p" data-component="Trajectory P"></div>
                    <div class="planet_description mars" data-component="PlanetDescription Mars">
                        <h2>Planet</h2>
                        <h1>Mars</h1>
                        <p>During Mars' earlier periods, it has been chaotically bombarded by asteroids. Now relatively calm,
                            the Amor family still cross Mars' orbit.
                        </p>
                        <label for="readMars">
                            <a>
                                Read Mor
                                <span>e</span>
                            </a>
                        </label>
                    </div>
                    <div class="overlay" data-component="Overlay"></div>
                </div>
            </div>
            <div class="solar_systm" data-component="SolarSystm">
                <div class="planet jupiter" data-component="Planet Jupiter">
                    <div class="moon lo" data-component="Moon Lo">
                        <h3>Trojan</h3>
                        <h2>Patroclus</h2>
                    </div>
                    <div class="moon europa" data-component="Moon Europa">
                        <h3>Trojans</h3>
                        <h2>Ceres</h2>
                    </div>
                    <div class="moon ganymede" data-component="Moon Ganymede">
                        <h3>Trojan</h3>
                        <h2>Hector</h2>
                    </div>
                    <div class="trajectory lop" data-component="Trajectory Lop"></div>
                    <div class="trajectory eu" data-component="Trajectory Eu"></div>
                    <div class="trajectory ga" data-component="Trajectory Ga"></div>
                    <div class="planet_description jupiter" data-component="PlanetDescription Jupiter">
                        <h2>Planet</h2>
                        <h1>Jupiter</h1>
                        <p>Jupiter, our loyal defender against asteroid annihilation. </p>
                        <label for="readJupiter">
                            <a>
                                Read Mor
                                <span>e</span>
                            </a>
                        </label>
                    </div>
                    <div class="overlay" data-component="Overlay"></div>
                </div>
            </div>
            <input class="read" id="readMercury" name="mercuryRead" type="radio" data-component="Read"/>
            <label class="closeBig" for="closeMercury"></label>
            <input class="read" id="closeMercury" name="mercuryRead" type="radio" data-component="Read"/>
            <div class="panel" data-component="Panel">
                <h1>Mercury</h1>
                <p>Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets,
                    which is why Romans named it after their swift-footed messenger god.</p>
                <p>The Sumerians also knew of Mercury since at least 5,000 years ago. It was often associated with Nabu, the
                    god of writing. Mercury was also given separate names for its appearance as both a morning star and as
                    an evening star. Greek astronomers knew, however, that the two names referred to the same body, and Heraclitus,
                    around 500 B.C., correctly thought that both Mercury and Venus orbited the sun, not Earth.</p>
                <img src="https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&amp;ssl=1"/>
                <h2>A year on Mercury is just 88 days long.</h2>
                <p>One solar day (the time from noon to noon on the planet’s surface) on Mercury lasts the equivalent of 176
                    Earth days while the sidereal day (the time for 1 rotation in relation to a fixed point) lasts 59 Earth
                    days. Mercury is nearly tidally locked to the Sun and over time this has slowed the rotation of the planet
                    to almost match its orbit around the Sun. Mercury also has the highest orbital eccentricity of all the
                    planets with its distance from the Sun ranging from 46 to 70 million km.</p>
                <h2>Mercury is the smallest planet in the Solar Systm.</h2>
                <p>One of five planets visible with the naked eye a, Mercury is just 4,879 Kilometres across its equator, compared
                    with 12,742 Kilometres for the Earth.</p>
                <h2>Mercury is the second densest planet.</h2>
                <p>Even though the planet is small, Mercury is very dense. Each cubic centimetre has a density of 5.4 grams,
                    with only the Earth having a higher density. This is largely due to Mercury being composed mainly of
                    heavy metals and rock.</p>
                <h2>Mercury has wrinkles.</h2>
                <p>As the iron core of the planet cooled and contracted, the surface of the planet became wrinkled. Scientist
                    have named these wrinkles, Lobate Scarps. These Scarps can be up to a mile high and hundreds of miles
                    long.
                </p>
                <br/>
            </div>
            <input class="read" id="readVenus" name="venusRead" type="radio" data-component="Read"/>
            <label class="closeBig" data-component="CloseBig" for="closeVenus"></label>
            <input class="read" data-component="Read" id="closeVenus" name="venusRead" type="radio"/>
            <div class="panel" data-component="Panel">
                <h1>Venus</h1>
                <p>Venus, the second planet from the sun, is named for the Roman goddess of love and beauty. The planet — the
                    only planet named after a female — may have been named for the most beautiful deity of her pantheon because
                    it shone the brightest of the five planets known to ancient astronomers.</p>
                <p>In ancient times, Venus was often thought to be two different stars, the evening star and the morning star
                    — that is, the ones that first appeared at sunset and sunrise. In Latin, they were respectively known
                    as Vesper and Lucifer. In Christian times, Lucifer, or "light-bringer," became known as the name of Satan
                    before his fall. However, further observations of Venus in the space age show a very hellish environment.
                    This makes Venus a very difficult planet to observe from up close, because spacecraft do not survive
                    long on its surface.</p>
                <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/2-whatistheave.jpg"/>
                <h2>A day on Venus lasts longer than a year.</h2>
                <p>It takes 243 Earth days to rotate once on its axis (sidereal day). The planet’s orbit around the Sun takes
                    225 Earth days, compared to the Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth
                    days.</p>
                <h2>Venus rotates in the opposite direction to most other planets.</h2>
                <p>This means that Venus is rotating in the opposite direction to the Sun, this is also know as a retrograde
                    rotation. A possible reason might be a collision in the past with an asteroid or other object that caused
                    the planet to alter its rotational path. It also differs from most other planets in our solar systm by
                    having no natural satellites.</p>
                <h2>Venus is the second brightest object in the night sky.</h2>
                <p>Only the Moon is brighter. With a magnitude of between -3.8 to -4.6 Venus is so bright it can be seen during
                    daytime on a clear day.</p>
                <h2>Atmospheric pressure on Venus is 92 times greater than the Earth’s.</h2>
                <p>While its size and mass are similar to Earth, the small asteroids are crushed when entering its atmosphere,
                    meaning no small craters lie on the surface of the planet. The pressure felt by a human on the surface
                    would be equivalent to that experienced deep beneath the sea on Earth.</p>
                <br/>
            </div>
            <input class="read" data-component="Read" id="readEarth" name="earthRead" type="radio"/>
            <label class="closeBig" data-component="CloseBig" for="closeEarth"></label>
            <input class="read" data-component="Read" id="closeEarth" name="earthRead" type="radio"/>
            <div class="panel">
                <h1>Earth</h1>

                <h2>Apollo Asteroid</h2>
                <h3>BQ6</h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2017_BQ6_radar_rotation.gif/260px-2017_BQ6_radar_rotation.gif"/>
                <p>In 2017, BQ6 a sub-kilometer asteroid on an eccentric orbit, classified as a near-Earth object and potentially
                    hazardous asteroid of the Apollo group, approximately 150 meters in diameter. </p>
                <p>It was discovered on 26 January 2017, by the Space Surveillance Telescope at Lincoln Laboratory's ETS (Atom
                    Site) and passed within 6.6 lunar distances of Earth on 7 February 2017 at 6:36 UT.</p>




                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Toutatis.jpg/250px-Toutatis.jpg"/>
                <h2>potentially hazardous object (PHO)</h2>
                <p>A PHO is a near-Earth object – either an asteroid or a comet – with an orbit such that it has the potential
                    to make exceptionally close approaches to the Earth and is of a size large enough to cause significant
                    regional damage in the event of impact.[1]</p>
                <p>Most of these objects are potentially hazardous asteroids (PHAs), defined as having a minimum orbital intersection
                    distance with Earth of less than 0.05 AU and an absolute magnitude of 22 or brighter.[2] As of January
                    2018 there are 1,885 known PHAs (about 11% of the total near-Earth population), of which 157 are estimated
                    to be larger than one kilometer in diameter (see list of largest PHAs below).[3][4][a] Most of the discovered
                    PHAs are Apollo asteroids (1,601) and fewer belong to the group of Aten asteroids (169).
                </p>
                <h2></h2>
                <p>Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted
                    that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it.
                    Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though
                    this is also not the case.</p>
                <h2>Earth has a powerful magnetic field.</h2>
                <p>This phenomenon is caused by the nickel-iron core of the planet, coupled with its rapid rotation. This field
                    protects the Earth from the effects of solar wind.</p>
                <h2>There is only one natural satellite of the planet Earth.</h2>
                <p>As a percentage of the size of the body it orbits, the Moon is the largest satellite of any planet in our
                    solar systm. In real terms, however, it is only the fifth largest natural satellite.</p>
                <br/>
            </div>
            <input class="read" data-component="Read" id="readMars" name="marsRead" type="radio"/>
            <label class="closeBig" data-component="CloseBig" for="closeMars">

            </label>
            <input class="read" data-component="Read" id="closeMars" name="marsRead" type="radio"/>
            <div class="panel" data-component="Panel">
                <h1>Mars</h1>
                <h2>Amor Asteroids</h2>
                <p>The Amor asteroids are a group of near-Earth asteroids named after the asteroid 1221 Amor. They approach
                    the orbit of Earth from beyond, but do not cross it. Most Amors cross the orbit of Mars. The two moons
                    of Mars, Deimos and Phobos, may be Amor asteroids that were captured by Mars' gravity. The most famous
                    member of this group is 433 Eros, which was the first asteroid to be orbited and then landed upon by
                    a human probe (NEAR Shoemaker).</p>
                    <p> </p>

                <p> </p>
                <img src="https://solarsystem.nasa.gov/system/content_pages/main_images/454_Eros_main.jpg"/>
                <h2>433 Eros</h2>
                <p>In 2001, 433 Eros was the first asteroid to be extensively studied and ultimately landed upon by a space
                    probe (the NEAR Shoemaker mission).</p>

                
                <img src="https://nssdc.gsfc.nasa.gov/planetary/image/near_20000216_anim_sm.gif"/>
                <p>Two days after NEAR Shoemaker began its orbit of Eros, the spacecraft captured this rotation movie as it moved closer to the asteroid. Although a number of movies have appeared on the NEAR Web site showing all manners of fascinating surface features, this was the last taken at a great enough distance to capture the full illuminated part of the asteroid in each frame. The movie shows a full rotation on February 16, 2000, as viewed from a range of about 340 kilometers (211 miles). It nicely captures the relationship of the two major landforms, the saddle and the 5.3-kilometer (3.3-mile) diameter crater, to the rest of Eros. (Product of selected images from 0126105943 to 0126124299)</p>

                <h2>Add Comments</h2>
                <p></p>
                <br/>
            </div>
            <input class="read" data-component="Read" id="readJupiter" name="jupiterRead" type="radio"/>
            <label class="closeBig" data-component="CloseBig" for="closeJupiter">

            </label>
            <input class="read" data-component="Read" id="closeJupiter" name="jupiterRead" type="radio"/>
            <div class="panel" data-component="Panel">
                <h1>Jupiter</h1>
                <h2>Trojans</h2>
                <img src="http://sajri.astronomy.cz/asteroidgroups/hitrfix.gif"/>
                <p>Trojans (green) swarm Jupiter's orbit. These points are called Langargrian. will meet NASA's Lucy mission.
                    The L4 Trojans lead Jupiter in its orbit and the L5 Trojans follow. By tradition, the L4 Trojans are
                    named for Greek characters in accounts of the Trojan War. The L5 bodies are named for characters on the
                    Trojan side of the conflict. </p>
                <p>Jupiter helped revolutionize the way we saw the universe and ourselves in 1610, when Galileo discovered Jupiter"s
                    four large moons — Io, Europa, Ganymede and Callisto, now known as the Galilean moons. This was the first
                    time that celestial bodies were seen circling an object other than Earth, major support of the Copernican
                    view that Earth was not the center of the universe.</p>
                <img src="http://sajri.astronomy.cz/asteroidgroups/hildaorb.gif"/>
                <h2>Lucy Spacecraft.</h2>
                <img src="data:image/jpeg;base64,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"/>
                <p>Lucy is a planned NASA space probe that will tour five Jupiter trojans, asteroids which share Jupiter's orbit
                    around the Sun, orbiting either ahead of or behind the planet.[1] On 4 January 2017, Lucy was chosen,
                    along with the Psyche mission, as NASA's Discovery Program missions 13 and 14 respectively.[1][2] The
                    mission is named after the 'Lucy' hominin skeleton, because the study of Trojans could reveal the "fossils
                    of planet formation": materials that clumped together in the early history of the Solar System to form
                    planets and other bodies.[3] The Australopithecus itself was named for a Beatles song, "Lucy in the Sky
                    with Diamonds".
                </p>
                <h2>Add Comments</h2>
        </div>
    </div>
 </div>

);

export default Animation;
