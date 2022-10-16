
import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function getTest(req, res) {

    try {
        await connectMongo();
        const testData = await Test.find();
        res.json({ testData });
    } catch (error) {
        res.json(error);

    }



}
