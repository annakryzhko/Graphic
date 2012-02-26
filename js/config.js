    var  config = {};

    config["prof"] = {
        width: 600,
        height: 450,
        axisX: {
            max: 50,
            points: [15, 20, 25, 30, 35, 40, 45, 50],
            min: 15

        },
        axisY: {
            max: 3,
            min: 0,
            points: [1, 2, 3],
            points2: [
			         { val: 0, lbl: "0" },
			         { val: 0.6, lbl: "20" },
			         { val: 1.2, lbl: "40" },
			         { val: 1.8, lbl: "60" },
			         { val: 2.4, lbl: "80" },
			         { val: 3, lbl: "100%" }
				]
        },

        points:
		       		[
		       			         { x: 19, y: 0.2, percent: 12 },
		       			         { x: 24, y: 0.6, percent: 15 },
		       			         { x: 28, y: 2.5, percent: 1 }
                     ]

    };

    config["social"] = {
        width: 600,
        height: 450,
        axisX: {
            max: 50,
            points: [15, 20, 25, 30, 35, 40, 45, 50],
            min: 15

        },
        axisY: {
            max: 3,
            min: 0,
            points: [1, 2, 3],
            points2: [
			         { val: 0, lbl: "0" },
			         { val: 0.6, lbl: "20" },
			         { val: 1.2, lbl: "40" },
			         { val: 1.8, lbl: "60" },
			         { val: 2.4, lbl: "80" },
			         { val: 3, lbl: "100%" }
				]
        },

        points:
		       		[
		       			       { x: 18, y: 1.2, percent: 42 },
		       			         { x: 28.4, y: 2, percent: 70 },
		       			         { x: 40.4, y: 0.8, percent: 10 }

                     ]

    }

    config["team"] = {
        width: 600,
        height: 450,
        axisX: {
            max: 65,
            points: [10, 20, 30, 40,  50,  60, 70],
            min: 10

        },
        axisY: {
            max: 3,
            min: 0,
            points: [1, 2, 3],
            points2: [
			         { val: 0, lbl: "0" },
			         { val: 0.6, lbl: "20" },
			         { val: 1.2, lbl: "40" },
			         { val: 1.8, lbl: "60" },
			         { val: 2.4, lbl: "80" },
			         { val: 3, lbl: "100%" }
				]
        },

        points:
		       		[
		       			         { x: 19, y: 0.3, percent: 12 },
		       			         { x: 40, y: 1, percent: 15 },
		       			         { x: 60, y: 1.2, percent: 1 }
                     ]

    }


