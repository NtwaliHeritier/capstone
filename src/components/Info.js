import React from 'react';

const Info = () => {
  const info = (store => store.info);
  return (
    <section>
      <div className="stock-details mt-4">
        <a className="navbar-brand mr-5 stock-title d-block text-center mb-5" href="body">{info.companyName}</a>
        <img src="./images/egg.jpg" alt="" />
        <p className="mt-5 stock-details-p p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ducimus deleniti laboriosam cumque sequi odit consequatur pariatur, nihil quaerat suscipit fuga dolorum nemo temporibus eveniet sed saepe adipisci explicabo aspernatur eaque. Repudiandae culpa veniam eos animi beatae accusantium quam alias ea aspernatur, maxime, deserunt saepe ratione nam doloribus ab sed reiciendis magnam praesentium est! Aliquam hic omnis fugit perspiciatis repellat veniam, itaque adipisci quod exercitationem dolorum quasi incidunt vero, beatae magnam libero! Consequatur suscipit perspiciatis corrupti voluptates recusandae sequi dolore nisi nesciunt, tenetur ea ex quibusdam quam itaque praesentium ad inventore iusto ipsa in nihil, voluptate assumenda incidunt eveniet? Temporibus dolorem magnam enim corporis cum ab unde velit odio reprehenderit! Laudantium soluta veritatis consequatur tempore ex sed omnis molestiae vero, inventore alias aliquid nesciunt, voluptas in esse enim officiis quia ipsa qui quod. Totam labore nemo accusantium ex. Itaque ad voluptatibus asperiores cumque. Tempora tenetur consequatur facere atque, itaque harum nobis, esse porro, quod exercitationem beatae. Exercitationem fuga dolores ipsa deserunt. Reiciendis suscipit sint soluta, est debitis a rem. Quae assumenda dolor culpa est eveniet architecto dolorem quidem praesentium, doloremque officia sint voluptas suscipit, officiis itaque, numquam minima quis illum exercitationem ut nihil sequi? Aliquam reprehenderit corrupti excepturi neque quis!</p>
      </div>
    </section>

  );
};

export default Info;
