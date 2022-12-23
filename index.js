export default function handler(request, response) {
  // api/[name].js -> /api/lee
  // req.query.name -> "lee"
  return response.status(200).send('OK')
}
