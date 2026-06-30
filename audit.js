const axios = require('axios');

const ENDPOINT = 'http://localhost:5000/api/telemetry/compare?season=2024&circuit=spa&driver_a=VER&driver_b=LEC';
const ITERATIONS = 5;

async function runAudit() {
    console.log(`\n🏎️  APEX Performance Audit Tool`);
    console.log(`====================================`);
    console.log(`Target: ${ENDPOINT}`);
    console.log(`Iterations: ${ITERATIONS}\n`);

    let totalTime = 0;
    let payloadSizes = [];

    for (let i = 1; i <= ITERATIONS; i++) {
        process.stdout.write(`[Run ${i}/${ITERATIONS}] Fetching... `);
        const start = Date.now();
        
        try {
            const res = await axios.get(ENDPOINT);
            const duration = Date.now() - start;
            totalTime += duration;
            
            const sizeKB = (JSON.stringify(res.data).length / 1024).toFixed(1);
            payloadSizes.push(parseFloat(sizeKB));

            console.log(`✅ ${duration}ms | Payload: ${sizeKB} KB`);
        } catch (error) {
            console.log(`❌ FAILED: ${error.message}`);
            return;
        }
    }

    const avgTime = (totalTime / ITERATIONS).toFixed(1);
    const avgSize = (payloadSizes.reduce((a, b) => a + b, 0) / ITERATIONS).toFixed(1);

    console.log(`\n📊 Audit Complete!`);
    console.log(`====================================`);
    console.log(`Average Response Time : ${avgTime} ms`);
    console.log(`Average Payload Size  : ${avgSize} KB`);
    console.log(`====================================\n`);
}

runAudit();
