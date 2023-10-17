import OpenAI from 'openai'


async function main() {
  new OpenAI({ apiKey: 'SECRET', });

  const response = await fetch('https://google.com')
  console.log(`${response.status} ${response.statusText}`)
}

if (require.main === module) main();
