import cors from 'cors'

const corsOptions = {
  credentiasl: true,
  optionSuccessStatus: 200,
  methods: "GET, PUT, POST, DELETE",
  origin: '*'
};

export default cors(corsOptions)