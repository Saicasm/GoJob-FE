type RowObj = {
  _id: string;
  company_name: string;
  title: string;
  skills: string[];
  job_description: string;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  score: string;
  compensation: string;
  location: string;
};

const tableDataCheck: RowObj[] = [
  {
    _id: '65639d03c19b7af10054ab8a',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:15.088Z',
    updated_at: '2023-11-26T19:31:15.088Z',
  },
  {
    _id: '65639d03c19b7af10054ab8c',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:15.273Z',
    updated_at: '2023-11-26T19:31:15.273Z',
  },
  {
    _id: '65639d03c19b7af10054ab8e',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:15.434Z',
    updated_at: '2023-11-26T19:31:15.434Z',
  },
  {
    _id: '65639d03c19b7af10054ab90',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:15.61Z',
    updated_at: '2023-11-26T19:31:15.61Z',
  },
  {
    _id: '65639d03c19b7af10054ab92',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:15.771Z',
    updated_at: '2023-11-26T19:31:15.771Z',
  },
  {
    _id: '65639d03c19b7af10054ab94',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:15.93Z',
    updated_at: '2023-11-26T19:31:15.93Z',
  },
  {
    _id: '65639d04c19b7af10054ab96',
    company_name: 'ByteDance',
    compensation: '$60/yr',
    title:
      'Software Engineer Intern (Developer Infrastructure) - 2024 Summer (PhD)',
    skills: ['Pytorch', 'Tensorflow', 'R', 'Python', 'Go'],
    job_description: '',
    location: 'San Jose, CA Reposted',
    score: '38.285714285714285',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:31:16.095Z',
    updated_at: '2023-11-26T19:31:16.095Z',
  },
  {
    _id: '65639f9a20acc93857323043',
    company_name: 'Oracle',
    compensation: '$18.99/hr-$38.32/hrR',
    title: 'Software Engineer Intern - Corporate Architecture',
    skills: ['Oracle', 'Java', 'C++', 'Python', 'go'],
    job_description: '',
    location: 'United States Reposted',
    score: '64.42857142857143',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:42:18.863Z',
    updated_at: '2023-11-26T19:42:18.863Z',
  },
  {
    _id: '6563a05020acc93857323046',
    company_name: 'Oracle',
    compensation: '$18.99/hr-$38.32/hrR',
    title: 'Software Engineer Intern - Corporate Architecture',
    skills: ['Oracle', 'Java', 'C++', 'Python', 'go'],
    job_description: '',
    location: 'United States Reposted',
    score: '68.875',
    user_id: 'saicsm@gmail.com',
    status: 'INTERESTED',
    created_at: '2023-11-26T19:45:20.052Z',
    updated_at: '2023-11-26T19:45:20.052Z',
  },
  {
    _id: '6563a06b20acc93857323049',
    company_name: 'Oracle',
    compensation: '$18.99/hr-$38.32/hrR',
    title: 'Software Engineer Intern - Corporate Architecture',
    skills: ['Oracle', 'Java', 'C++', 'Python', 'go'],
    job_description: '',
    location: 'United States Reposted',
    score: '72.33333333333333',
    user_id: 'saicsm@gmail.com',
    status: 'IN_PROGRESS',
    created_at: '2023-11-26T19:45:47.618Z',
    updated_at: '2023-11-26T19:45:47.618Z',
  },
];

export default tableDataCheck;
