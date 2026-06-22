import axios from 'axios';

async function test() {
  try {
    const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_s0jtz79', 
      template_id: 'template_0a0g21m', 
      user_id: '2F_VrU52zpaloS91j',
      template_params: {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test message'
      }
    });
    console.log('Status:', res.status);
    console.log('Data:', res.data);
  } catch (err) {
    console.log('Error status:', err.response?.status);
    console.log('Error data:', err.response?.data);
  }
}

test();
