import express from 'express';
import cors from 'cors';
import Context from '../../../core/context.js'

const ctx = new Context

const app = express();
app.use(cors("*"));
app.use(express.json());

async function createClient(req, res){
  console.log(` usuário criado{ 
                  username ${req.body.username} 
                  affiliatedId ${req.body.affiliatedId}
                }`) 
  try{
    const request = await ctx.client.create(req.body.username, req.body.affiliatedId)
    res.json({message: 'client criado', client: request})
  }catch(err){
    res.json({error: err})
  }
  
}

app.post('/api/roblox-user', async (req, res) => {
  const { username } = req.body;
  try {
    const fetchProfile = await fetch('https://users.roblox.com/v1/usernames/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usernames: username,
        excludeBannedUsers: false,
      }),
    });
    
     
    const profile = await fetchProfile.json();

    const fetchProfileImg = await fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${profile.data[0].id}&size=720x720&format=Png&isCircular=true`, {
      method: 'GET'  
    })

    const profileImg  = await fetchProfileImg.json()
    profile.data[0].imageUrl = profileImg.data[0].imageUrl
    const data = profile
    res.json(data);
  } catch (error) {
    console.error('Erro na API Roblox:', error);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

app.post('/api/create-client', createClient)

app.listen(3001, () => console.log('Rodando proxy na porta 3001'));
