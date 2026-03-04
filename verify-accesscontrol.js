#!/usr/bin/env node
/**
 * 🔍 AccessControl Refactorisation - Checklist Rapide
 * Vérification que tous les fichiers créés existent et sont valides
 */

const fs = require('fs');
const path = require('path');

const files = [
  // Page
  'src/pages/AccessControl.js',
  
  // Composants SEO
  'src/components/SEOAccessControl.js',
  
  // Breadcrumb
  'src/components/Breadcrumb/BreadCrumbAccessControl.js',
  
  // Hero
  'src/components/Hero/HeroAccessControl.js',
  
  // Services
  'src/components/Services/ServiceDetailsInfoAccessControl.js',
  'src/components/Services/BenefitsAccessControl.js',
  'src/components/Services/ProcessAccessControl.js',
  'src/components/Services/FAQAccessControl.js',
  
  // Layout/Footer
  'src/components/Layout/Footer/AboutAccessControl.js',
];

console.log('🔍 Checklist Intégrité Refactorisation AccessControl\n');
console.log('=' .repeat(50));

let allValid = true;
let createdCount = 0;
let errorCount = 0;

files.forEach((file) => {
  const fullPath = path.join(__dirname, file);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    const sizeKb = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${file}`);
    console.log(`   Size: ${sizeKb}KB`);
    createdCount++;
  } else {
    console.log(`❌ ${file}`);
    console.log(`   MANQUANT!`);
    allValid = false;
    errorCount++;
  }
});

console.log('\n' + '='.repeat(50));
console.log(`\n📊 Résumé:`);
console.log(`   ✅ Fichiers créés: ${createdCount}/${files.length}`);
console.log(`   ❌ Fichiers manquants: ${errorCount}/${files.length}`);

// Vérifier App.js route
console.log(`\n🔗 Route Verification:`);
const appPath = path.join(__dirname, 'src/App.js');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf-8');
  const hasRoute = appContent.includes('/controle-acces');
  const hasImport = appContent.includes('import AccessControl');
  
  if (hasRoute && hasImport) {
    console.log(`   ✅ Route '/controle-acces' trouvée`);
    console.log(`   ✅ Import AccessControl trouvé`);
  } else {
    console.log(`   ❌ Route ou Import manquant!`);
    allValid = false;
  }
}

// Vérifier SEO imports dans page
console.log(`\n📦 Imports Verification:`);
const pageContent = fs.readFileSync(path.join(__dirname, 'src/pages/AccessControl.js'), 'utf-8');

const requiredImports = [
  'SEOAccessControl',
  'BreadCrumbAccessControl',
  'HeroAccessControl',
  'ServiceDetailsInfoAccessControl',
  'BenefitsAccessControl',
  'ProcessAccessControl',
  'AboutAccessControl',
  'FAQAccessControl',
];

requiredImports.forEach(imp => {
  if (pageContent.includes(imp)) {
    console.log(`   ✅ ${imp}`);
  } else {
    console.log(`   ❌ ${imp} MANQUANT!`);
    allValid = false;
  }
});

console.log('\n' + '='.repeat(50));
if (allValid && errorCount === 0) {
  console.log('✅ TOUS LES FICHIERS SONT VALIDES!\n');
  console.log('🚀 Prêt pour:');
  console.log('   1. npm start');
  console.log('   2. Visiter http://localhost:3000/controle-acces');
  console.log('   3. Validation SEO et AOS animations\n');
  process.exit(0);
} else {
  console.log('❌ ERREURS DÉTECTÉES!');
  console.log('   Veuillez vérifier les fichiers manquants ci-dessus.\n');
  process.exit(1);
}
