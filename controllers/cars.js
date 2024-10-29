let CarModel = require('../models/cars');

module.exports.create = async function (req, res, next) {
    try {
        let newCar = new CarModel(req.body);

        let result = await CarModel.create(newCar);
        res.json(
            {
                success: true,
                message: 'Car created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {
    const Car = require('../models/cars'); // Ensure to import your Car model

    exports.list = async (req, res) => {
        try {
            const cars = await Car.find(); // Fetch all cars from the database
            res.status(200).json(cars); // Return the list of cars
        } catch (error) {
            res.status(500).json({ message: "Error fetching cars", error });
        }
    };
    
    }    /// Add your code here.


module.exports.carGet = async function (req, res, next) {
    try {
        let uID = req.params.carID;

        req.car = await CarModel.findOne({ _id: uID });
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.carID;

        let updateCar = new CarModel(req.body);
        updateCar._id = uID;

        let result = await CarModel.updateOne({ _id: uID }, updateCar);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Car updated successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Car not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        

        let result = await CarModel.deleteOne({ _id: uID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Car deleted successfully.'
                }

    
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Car not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.remove = async (req, res) => {
    const carID = req.params.carID; // Obtain the ID from the request params

    try {
        await Car.findByIdAndRemove(carID); // Remove the car from the database
        res.status(200).json({ message: "Car removed successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error removing car", error });
    }
};