import http from 'k6/http';
import { check, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export let options = {
  vus: 500,
  duration: '5m',
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisições devem ser menores que 2s
  },
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts');
  check(res, {
    'status é 200': (r) => r.status === 200,
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'k6/reports/summary.json': JSON.stringify(data), // Relatório JSON
    'k6/reports/summary.html': textSummary(data, { indent: ' ', enableColors: true }), // Relatório HTML
  };
}

