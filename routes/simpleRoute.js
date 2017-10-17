module.exports = app => {
  app.get('/api', function (req, res) {
    res.send('Welcome to Konviv!')
  })
 app.get('/api/team', (req, res) => {
  res.send(
    {team: 'Konviv'}
  )
 });
}
