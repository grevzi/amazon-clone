import firebase, {admin} from '../../../../firebaseAdmin';

export default async (req, res) => {
    try {

        const {
            id,
            title,
            price,
            description,
            category,
            image,
            qty,
            rating,
            hasPrime,
            email
        } = req.body

        console.log({
            id,
            title,
            price,
            description,
            category,
            image,
            qty: 1,
            rating,
            hasPrime,
            email
        })

        firebase
            // .collection('users')
            // .doc(email)
            // .collection('basketProducts')
            .collection('tests')
            .doc(`product_${id}`)
            .set({
                id,
                title,
                price,
                description,
                category,
                image,
                qty: qty || 1,
                rating,
                hasPrime,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                console.log(`Success: basket product ${id} had been added to the DB`);
            })

        res.status(200).json({id});

    } catch (e) {
        console.log(e.message);
        res.status(400).end();
    }
}