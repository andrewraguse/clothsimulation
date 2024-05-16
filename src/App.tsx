import './App.css';

function App() {
  return (
    <>
      <h1>Cloth Simulation Project</h1>
      <h3>By: Andrew Raguse</h3>
      <h4>May 15, 2024</h4>

      <div id="overview">
        <h2>Overview</h2>
        <p>
          Imagine we want to render a scene where a girl is dancing in a long,
          flowing dress. A straightforward yet labor-intensive approach would be
          to recreate this scene in real life, meticulously study the dress's
          movement as she dances, and then create a series of sequential still
          images to depict where the cloth would be in each new position. While
          this method could achieve realistic results, it would be extremely
          challenging and time-consuming to draw each individual frame.
          <br />
          <br />
          Instead of relying on this brute-force technique, what if we could
          model the dress using real-world physics? By simulating the dress’s
          behavior mathematically, we could allow its position and movement to
          be determined by physical principles. This way, we wouldn't need to
          manually draw every scene; the model would dynamically adjust based on
          the dancer's movements, creating a more efficient and realistic
          animation. In this project, we will demonstrate how to simulate the
          movements of a dress-like material, using physics to realistically
          depict the behavior of cloth under various internal and external
          forces.
        </p>
      </div>
      <div id="model">
        <h2>Model</h2>
        <p>
          Throughout the history of computer graphics, various models have been
          developed for simulating cloth. The simplest and most intuitive model
          uses a system of point masses connected by springs. In this approach,
          a rectangular cloth is divided into a grid of points, each equidistant
          from its neighbors. By calculating the position of each point based on
          the internal and external forces acting upon it, we can simulate the
          cloth's movement. Nearby points are connected with springs to maintain
          logical distances, ensuring the cloth behaves realistically.
          <br />
          <br />
          To control the way the cloth bends and deforms, we implement three
          types of springs:
          <br />
          <br />
          <b>Structural Springs:</b> These basic springs connect each point to
          its immediate left, right, top, and bottom neighbors. They ensure that
          point masses remain at consistent distances, preventing them from
          moving too close or too far from each other.
          <br />
          <br />
          <img
            src="placeholder.jpg"
            alt="Description of Image"
            width="300"
            height="300"
          ></img>
          <br />
          <br />
          <b>Shearing Springs:</b> To prevent the cloth from collapsing when
          pulled diagonally, we add diagonal springs between points and their
          diagonal neighbors. These springs provide stability and maintain the
          cloth’s shape when forces act in any direction.
          <br />
          <br />
          <img
            src="placeholder.jpg"
            alt="Description of Image"
            width="300"
            height="300"
          ></img>
          <br />
          <br />
          <b>Bending Springs:</b> These springs connect each point to its second
          neighbor in all directions (left, right, up, and down). They prevent
          the cloth from folding unnaturally by ensuring that the cloth bends
          smoothly, rather than creasing sharply.
          <br />
          <br />
          <img
            src="public/placeholder.jpg"
            alt="Description of Image"
            width="300"
            height="300"
          ></img>
        </p>
      </div>
      <div id="simulation">
        <h2>Simulation</h2>
        <p>
          To simulate the movement of the cloth, we break the process into
          individual timesteps. At each timestep, we calculate all the forces
          acting on each point mass, including internal spring forces and
          external forces such as air resistance and gravity. Using Verlet
          integration, we then determine the new position of each point mass.
          Verlet integration is a method that allows us to compute the next
          position of a point based on its current position and the forces
          acting on it, providing a stable and accurate simulation of motion.
          <br />
          <br />
          Additionally, we constrain the springs to prevent their length from
          increasing by more than 10%, as suggested by the SIGGRAPH 1995 Provot
          paper paper. This constraint is necessary to maintain the structural
          integrity of the cloth and prevent unrealistic stretching. While this
          constraint does introduce a loss of energy to the system, making the
          simulation less physically accurate, it is crucial for preventing the
          cloth from overstretching and becoming unstable.
          <br />
          <br />
          By incorporating these methods, we can simulate the realistic movement
          of cloth under various forces, achieving a balance between physical
          accuracy and computational stability.
          <br />
          <br />
          <img
            src="image_processing20201113-26407-x3vt9y.gif"
            alt="Description of GIF"
            width="300"
            height="300"
          />
        </p>
        <div id="variables">
          <h3>Variables</h3>
          <p>
            There are a few key factors we can adjust in our cloth simulation to
            influence its behavior:
          </p>
          <ol>
            <li>
              <b>Damping: </b>Damping controls how quickly the system loses
              energy. Higher damping values cause the cloth to lose energy more
              rapidly, mimicking the effects of wind resistance and internal
              friction. This means the cloth will come to rest more quickly and
              exhibit slower movements. In contrast, low damping values allow
              the cloth to continue moving for a longer period, resulting in
              more dynamic and prolonged oscillations.
              <div id="damping-gifs">
                <img
                  src="image_processing20201113-26407-x3vt9y.gif"
                  alt="Description of GIF"
                  width="300"
                  height="300"
                />
                <img
                  src="image_processing20201113-26407-x3vt9y.gif"
                  alt="Description of GIF"
                  width="300"
                  height="300"
                />
              </div>
            </li>
            <li>
              <b>Density: </b>Density refers to the mass of each point mass in
              the cloth. Increasing the density makes each point mass heavier,
              which affects how the cloth responds to forces such as gravity and
              air resistance. A higher density cloth will have a more
              substantial, weightier appearance and move more slowly, while a
              lower density cloth will appear lighter and more responsive to
              external forces.
              <div id="density-gifs">
                <img
                  src="image_processing20201113-26407-x3vt9y.gif"
                  alt="Description of GIF"
                  width="300"
                  height="300"
                />
                <img
                  src="image_processing20201113-26407-x3vt9y.gif"
                  alt="Description of GIF"
                  width="300"
                  height="300"
                />
              </div>
            </li>
            <li>
              <b>
                Spring Constant (k<sub>s</sub>):
              </b>
              The spring constant determines the stiffness of the springs
              connecting the point masses. A higher spring constant results in
              stiffer springs, making the cloth more rigid and resistant to
              deformation. This will cause the cloth to appear less flexible and
              more bouncy when disturbed. Conversely, a lower spring constant
              makes the springs more elastic, allowing for greater flexibility
              and smoother deformations.
              <div id="spring-constant-gifs">
                <img
                  src="image_processing20201113-26407-x3vt9y.gif"
                  alt="Description of GIF"
                  width="300"
                  height="300"
                />
                <img
                  src="image_processing20201113-26407-x3vt9y.gif"
                  alt="Description of GIF"
                  width="300"
                  height="300"
                />
              </div>
            </li>
          </ol>
        </div>
        <div id="collisions-with-objects">
          <h3>Collisions with Objects</h3>
          <h4>Spheres</h4>
          <p>
            The first object we will simulate colliding with is a sphere. To
            handle collisions with a sphere, we check each point mass's position
            to see if it intersects or is inside the sphere. If it does, we
            "bump" the point mass to the surface of the sphere. This is achieved
            by computing a correction vector that moves the point from its
            current position to a point on the surface of the sphere. This
            correction vector is applied to the point's previous position,
            scaled down by a friction factor. The friction factor simulates the
            frictional interaction between the cloth and the sphere, ensuring
            the point mass doesn't slip too freely along the surface. While this
            method isn't perfectly physically accurate, it effectively simulates
            the frictional effects necessary for realistic cloth behavior.
          </p>
          <img
            src="image_processing20201113-26407-x3vt9y.gif"
            alt="Description of GIF"
            width="300"
            height="300"
          />
          <h4>Planes</h4>
          <p>
            For collisions with planes, the approach is slightly different since
            there is no concept of "inside" a plane. Instead, we check whether
            the new position of a point mass has crossed to the opposite side of
            the plane compared to its previous position. If this is the case, we
            compute a correction vector for the previous position, similar to
            the sphere collision method, and scale it down by a friction factor.
            This correction ensures that the point mass stays on the correct
            side of the plane, simulating the cloth's interaction with flat
            surfaces.
            <br />
            <br />
            By applying these methods, we can realistically simulate how cloth
            interacts with spherical and planar objects, incorporating friction
            to add to the realism of the simulation.
          </p>
          <img
            src="image_processing20201113-26407-x3vt9y.gif"
            alt="Description of GIF"
            width="300"
            height="300"
          />
        </div>
        <div id="self-collisions">
          <h3>Self Collisions</h3>
          <p>
            In our current implementation, you might notice that when a cloth is
            dropped vertically onto a horizontal plane, it doesn't behave
            accurately. Specifically, the cloth tends to fold into itself and
            clip through itself, which is unrealistic. How can we address this
            issue?
            <br />
            <br />
            One potential solution is to treat each point mass like an
            individual object and check for collisions between every pair of
            point masses. However, this approach would result in an O(n^2)
            runtime complexity because each point mass would need to be checked
            against every other point mass. While this might be manageable for
            small cloth simulations, it becomes impractical for larger or more
            intricate cloth models due to significant performance issues.
            Additionally, this method is inefficient because it would involve
            checking points that are nowhere near each other.
            <br />
            <br />
            A more efficient solution is to use a technique called spatial
            hashing. Spatial hashing involves dividing the 3D space of the cloth
            model into smaller subcomponents, or "cells." At each timestep, we
            place each point mass into one of these cells using a hash table.
            This way, we only need to check for collisions among point masses
            within the same cell or neighboring cells, significantly reducing
            the number of collision checks.
            <br />
            <br />
            Here's how it works:
            <ol>
              <li>
                <b>Divide the Space:</b> Split the 3D space into a grid of
                smaller 3D subcomponents (cells).
              </li>
              <li>
                <b>Hash Table Assignment:</b> At each timestep, assign each
                point mass to a cell in the grid based on its position.
              </li>
              <li>
                <b>Collision Checks: </b>For each point mass, only check for
                collisions with other point masses within the same cell or
                neighboring cells, rather than the entire cloth.
              </li>
            </ol>
            When a collision is detected, we adjust the positions of the
            colliding point masses to ensure they remain a specified distance
            apart. This adjustment mimics the realistic behavior of cloth
            interacting with itself. By using spatial hashing, we effectively
            reduce the runtime complexity of collision detection from O(n^2) to
            O(n), making the simulation more efficient and scalable for larger
            cloth models.
          </p>
          <div id="spatial-hashing-gifs">
            <figure>
              <img
                src="image_processing20201113-26407-x3vt9y.gif"
                alt="Description of GIF"
                width="300"
                height="300"
              />
              <figcaption>
                Without spatial hashing, the cloth moves through itself.
              </figcaption>
            </figure>
            <figure>
              <img
                src="image_processing20201113-26407-x3vt9y.gif"
                alt="Description of GIF"
                width="300"
                height="300"
              />
              <figcaption>
                With spatial hashing implemented, the cloth folds over itself
                instead.
              </figcaption>
            </figure>
          </div>
        </div>
        <div id="wind">
          <h3>Wind</h3>
          <p>Not yet implemented.</p>
        </div>
      </div>
      <div id="shaders">
        <h2>Shaders</h2>
        <p>
          In this phase of the project, we delve into the realm of shaders and
          their role in creating realistic material representations in real-time
          rendering. Ideally, in rendering scenes, we would employ ray-tracing,
          a technique simulating the intricate interactions of light rays with
          objects in a scene. These rays bounce off objects, adjusting their
          direction based on the material properties, until their luminance
          diminishes. However, ray-tracing demands substantial computational
          resources and time, making it impractical for real-time simulations,
          such as those in video games. Instead, we turn to shaders — isolated
          programs running in parallel on the GPU — which receive inputs and
          output single four-dimensional direction vectors. While this approach
          may sacrifice some physical realism, it offers versatility, allowing
          us to employ various shader types to render both realistic and
          artistic materials.
        </p>
        <div id="diffuse-shading">
          <h3>Shader 1: Diffuse Shading</h3>
          <p>
            Next, we’ll dive into diffuse shading, a technique we use to render
            Lambertian objects. Lambertian objects have surfaces like plain
            paper or rough stones—devoid of gloss or shine. This means their
            appearance doesn't change much depending on the viewing angle.
            Unlike reflective surfaces, the illumination on Lambertian objects
            remains consistent regardless of the viewer's perspective. In this
            shading model, the luminance of an object is determined by the
            cosine of the angle between its surface normal and the direction of
            incident light. Consequently, areas of the object directly facing
            the light source exhibit higher luminance compared to those facing
            away. As a result, the color intensity of each surface fragment is
            directly proportional to the amount of light it receives.
          </p>
          <figure>
            <img
              src="placeholder.jpg"
              alt="Diffuse Shading Diagram"
              width="300"
              height="300"
            />
            <figcaption>//FIXME Insert Diffuse Shading Equation</figcaption>
          </figure>
          <figure>
            <img
              src="image_processing20201113-26407-x3vt9y.gif"
              alt="Cloth Simulation using Diffuse Shading"
              width="300"
              height="300"
            />
            <figcaption>//FIXME Caption about diffuse shading</figcaption>
          </figure>
        </div>
        <div id="phong-shading">
          <h3> Shader 2: Phong Shading</h3>
          <p>
            Phong shading is ideal for rendering matte surfaces that exhibit
            highlights, such as a whiteboard, a shiny car, or a metallic ball.
            These highlights dynamically shift across the surface as the
            viewer's position changes. On closer inspection, these highlights
            reveal themselves as reflections of the incident light. This
            reflective aspect of the lighting is known as the specular component
            and is most pronounced when the viewer's line of sight aligns
            closely with the direction of the light vector reflected across the
            surface normal.
            <br />
            <br />
            In addition to these highlights, these objects retain a matte
            appearance, indicating that they are not entirely reflective. This
            non-reflective characteristic can be referred to as the diffuse
            component, as mentioned earlier. Furthermore, even areas of the
            object not directly illuminated by the light source exhibit a subtle
            luminance. This phenomenon occurs in the real world due to light
            reflecting off nearby surfaces or objects before reaching the
            non-illuminated parts of the object.
            <br />
            <br />
            To simulate these intricate lighting effects using shaders, we
            cannot rely on the same reflection techniques employed in ray
            tracing. Instead, we incorporate a component known as ambient
            shading. Ambient shading introduces a baseline level of luminance to
            an object, which is proportional to the intensity of the light
            source. This ensures that even areas of the object not directly
            illuminated by the light source still receive some degree of
            illumination.
            <br />
            <br />
            By combining these three components—specular, diffuse, and
            ambient—we achieve Phong shading, which provides a comprehensive
            representation of how light interacts with surfaces in a 3D scene.
          </p>
          <div id="phong-shading-images">
            <figure>
              <img
                src="image_processing20201113-26407-x3vt9y.gif"
                alt="Diffuse Shading Component"
                width="100"
                height="100"
              />
              <figcaption>Diffuse Shading Component</figcaption>
            </figure>
            <p>+</p>
            <figure>
              <img
                src="image_processing20201113-26407-x3vt9y.gif"
                alt="Ambient Shading Component"
                width="100"
                height="100"
              />
              <figcaption>Ambient Shading Component</figcaption>
            </figure>
            <p>+</p>
            <figure>
              <img
                src="image_processing20201113-26407-x3vt9y.gif"
                alt="Specular Shading Component"
                width="100"
                height="100"
              />
              <figcaption>Specular Shading Component</figcaption>
            </figure>
            <p>=</p>
            <figure>
              <img
                src="image_processing20201113-26407-x3vt9y.gif"
                alt="Phong Shading"
                width="100"
                height="100"
              />
              <figcaption>Phong Shading</figcaption>
            </figure>
          </div>
          <p>
            Above, we can observe each individual shading component and how
            their combination results in a realistic shiny material effect.
          </p>
        </div>
        <div id="texture-mapping">
          <h3>Shader 3: Texture Mapping</h3>
          <p>
            Often, the materials we render aren't uniform in color. Take, for
            instance, a picnic blanket with red and white stripes. To recreate
            such complex patterns, we employ a technique called texture mapping.
            In this technique, A 2D image with UV coordinates is assigned to the
            surface of the 3D object. Each point on the object corresponds to a
            point on the texture, ensuring that as the object moves, the texture
            moves with it. Triangular interpolation is employed to ensure smooth
            transitions between texture coordinates across the object's surface,
            enhancing the realism of the rendered material.
          </p>
          <figure>
            <img
              src="image_processing20201113-26407-x3vt9y.gif"
              alt="Texture Mapping"
              width="100"
              height="100"
            />
            <figcaption>//FIXME CAPTION</figcaption>
          </figure>
        </div>
        <div id="bump-mapping">
          <h3>Shader 4: Bump Mapping</h3>
          <p>
            In observing various materials, we often notice that their textures
            aren't flat. For instance, while wallpaper may lack texture, the
            skin of a snake features scales. This textured variation affects how
            light interacts with the object, causing some areas to receive light
            differently due to variations in surface normals. To account for
            this, we employ bump mapping.
            <br />
            <br />
            We use a texture to specify the height of each point on the object's
            surface. By examining the height of a point and its neighboring
            points, we can compute the surface normal based on the change in
            height. This results in multiple normals across the object's
            surface, enabling more accurate Phong shading.
            <br />
            <br />
            Triangular interpolation plays a crucial role in some
            implementations, particularly in bump mapping scenarios. It
            facilitates the smooth transition of normals across the surface of
            the object, ensuring a realistic representation of surface details.
            Typically, calculations are performed in texture space to compute
            normals, leveraging texture coordinates for height information
            retrieval. These computed normals are then converted to model space,
            simplifying their application in the shader.
          </p>
          <figure>
            <img
              src="image_processing20201113-26407-x3vt9y.gif"
              alt="Bump Mapping"
              width="100"
              height="100"
            />
            <figcaption>//FIXME CAPTION</figcaption>
          </figure>
        </div>
        <div id="displacement-mapping">
          <h3>Shader 5: Displacement Mapping</h3>
          <p>
            Although bump mapping may produce visually appealing results, we
            observe a limitation in its outcome. Examining the sphere, we notice
            that the texture fails to alter the sphere's shape, despite the
            expectation of a slightly bumpy appearance.
          </p>
          <figure>
            <img
              src="placeholder.jpg"
              alt="Smooth Sphere Edge"
              width="100"
              height="100"
            />
            <figcaption>//FIXME CAPTION</figcaption>
          </figure>
          <p>
            To overcome this limitation, we implement displacement mapping. This
            technique involves adjusting the positions of each point based on
            the height of its texture coordinate, in addition to considering the
            direction of the normal. By modifying each point's original model
            space vector scaled by the height of its textured value in the
            direction of its normal, we achieve a more accurate representation
            of surface details.
          </p>
          <figure>
            <img
              src="placeholder.jpg"
              alt="Bumpy Sphere Edge"
              width="100"
              height="100"
            />
            <figcaption>//FIXME CAPTION</figcaption>
          </figure>
          <p>
            In the above texture-mapped object, we can observe that the edges of
            the object now accurately reflect the bumpiness of the material,
            resolving the previous issue encountered with bump mapping.
          </p>
          <figure>
            <img
              src="image_processing20201113-26407-x3vt9y.gif"
              alt="Displacement Map Shading"
              width="100"
              height="100"
            />
            <figcaption>//FIXME</figcaption>
          </figure>
        </div>
        <div id="environment-mapping">
          <h3>Shader 6: Environmental Mapping</h3>
          <p>
            In ray tracing, achieving mirror-like reflections is relatively
            straightforward: we reflect our eye vector across the surface and
            sample the color of what it bounces off. However, real-time shaders
            struggle with this because computing reflections from our surface
            into neighboring objects is impractical. Instead, we employ a
            technique called environment mapping. Here, we utilize a 6-sided
            texture placed on the walls of an infinitely large cube. Each point
            on these walls corresponds to a direction vector in space. By
            reflecting our eye vector across a surface normal and sampling where
            it would land on the map, we simulate a mirror-like material.
            However, this method still cannot account for reflections of other
            objects in the scene.
          </p>
          <figure>
            <img
              src="image_processing20201113-26407-x3vt9y.gif"
              alt="Environment Map Shading"
              width="100"
              height="100"
            />
            <figcaption>//FIXME</figcaption>
          </figure>
        </div>
      </div>
      <div>
        <h2>Closing Remarks</h2>
        <p>
          Thank you for taking the time to explore this project. I hope you
          found it insightful to learn about rendering physical simulations of
          cloth. The foundation of this project is based on the starter code
          provided by UC Berkeley's Computer Science 184 class. I extended the
          project beyond its original scope to implement captivating simulations
          for the cloth. Throughout the project, my research was primarily
          guided by CS 184 lectures and the Fundamentals of Computer Graphics
          Third Edition textbook.
        </p>
      </div>
    </>
  );
}

export default App;
