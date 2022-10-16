
import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addTest(req, res) {

    try {
        const { name, email } = req.body;

        await connectMongo();
        const test = await Test.create(req.body);

        res.json({ test });
    } catch (error) {
        console.log(error);
        res.json(error);

    }



}
