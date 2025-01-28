import { factories } from '@strapi/strapi';
import axios from 'axios';

// Function to trigger Netlify build
const triggerNetlifyBuild = async () => {
  try {
    await axios.post('https://api.netlify.com/build_hooks/6798f1a78c90d60096c03aa0');
    console.log('Netlify build triggered successfully');
  } catch (error) {
    console.error('Error triggering Netlify build:', error);
  }
};

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  // Override the default update method
  async update(ctx) {
    // Call the default Strapi update method
    const response = await super.update(ctx);

    // Trigger Netlify build after updating global content
    await triggerNetlifyBuild();

    return response;
  },
}));
