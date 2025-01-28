import { factories } from '@strapi/strapi';
import axios from 'axios';

// Function to trigger Netlify build
const triggerNetlifyBuild = async () => {
  try {
    await axios.post('https://api.netlify.com/build_hooks/YOUR_BUILD_HOOK_ID');
    console.log('Netlify build triggered successfully');
  } catch (error) {
    console.error('Error triggering Netlify build:', error);
  }
};

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  // Override the create method
  async create(ctx) {
    // Call the default Strapi create method
    const response = await super.create(ctx);

    // Trigger Netlify build after creating a page
    await triggerNetlifyBuild();

    return response;
  },

  // Override the update method
  async update(ctx) {
    // Call the default Strapi update method
    const response = await super.update(ctx);

    // Trigger Netlify build after updating a page
    await triggerNetlifyBuild();

    return response;
  },

  // Override the delete method
  async delete(ctx) {
    // Call the default Strapi delete method
    const response = await super.delete(ctx);

    // Trigger Netlify build after deleting a page
    await triggerNetlifyBuild();

    return response;
  },
}));
