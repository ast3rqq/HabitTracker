const { execSync } = require('child_process');

console.log('Installing dependencies...');

try {
    // Install core dependencies
    execSync('npm install next@latest react@latest react-dom@latest', { stdio: 'inherit' });
    
    // Install UI dependencies
    execSync('npm install tailwindcss@latest postcss@latest autoprefixer@latest', { stdio: 'inherit' });
    
    // Install chart dependencies
    execSync('npm install chart.js react-chartjs-2', { stdio: 'inherit' });
    
    // Install dev dependencies
    execSync('npm install --save-dev typescript @types/react @types/react-dom @types/node', { stdio: 'inherit' });
    
    console.log('All dependencies installed successfully!');
    console.log('\nTo start the development server, run:');
    console.log('npm run dev');
} catch (error) {
    console.error('Error installing dependencies:', error);
} 