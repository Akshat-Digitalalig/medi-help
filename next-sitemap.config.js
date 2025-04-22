/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.medihelpglobal.com/',
    generateRobotsTxt: true, // Automatically generate robots.txt
    exclude: ['/api/'],
    transform: async (config, path) => {
      const dynamicPaths = [
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms-conditions',
        '/consult-online',
        '/doctors',
        '/hospitals',
        '/treatments',
        '/knowledge-center',
      ];
  
      if (path === '/' || dynamicPaths.includes(path)) {
        return {
          loc: path,
          lastmod: new Date().toISOString(),
        };
      }
  
      if (path.startsWith('/doctors/') || path.startsWith('/diseases/')) {
        return {
          loc: path,
          lastmod: new Date().toISOString(),
        };
      }
  
      return {
        loc: path,
        lastmod: new Date().toISOString(),
      };
    },
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.medihelpglobal.com/sitemap.xml',
      ],
    },
  };
  