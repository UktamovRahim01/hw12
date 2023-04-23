let jobs = [
    {
        id: 1,
        company_name: "raximjon_pepsi",
        tax: 13,
        budget: 2_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 15000
            },
            {
                title: "salary",
                total: 500_000
            },
            {
                title: "rent",
                total: 200_000
            },
        ]
    },
    {
        id: 2,
        company_name: "amir_fanta_stick",
        tax: 12,
        budget: 1_800_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 20_000
            },
            {
                title: "salary",
                total: 700_000
            },
            {
                title: "rent",
                total: 100_000
            },
        ]
    },
    {
        id: 3,
        company_name: "frump_buildings",
        tax: 14,
        budget: 3_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 50_000
            },
            {
                title: "salary",
                total: 1_200_000
            },
            {
                title: "rent",
                total: 500_000
            },
        ]
    },
    {
        id: 4,
        company_name: "farrux_tube",
        tax: 12,
        budget: 10_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 4_000_000
            },
            {
                title: "rent",
                total: 300_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 6,
        company_name: "nosway_u_rustama",
        tax: 10,
        budget: 100_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 10_000
            },
            {
                title: "salary",
                total: 0
            },
            {
                title: "rent",
                total: 0
            },
        ]
    },
    {
        id: 6,
        company_name: "vinovodochnaya_u_timura",
        tax: 21,
        budget: 1_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 20_000
            },
            {
                title: "rent",
                total: 30_000
            },
        ]
    },
    {
        id: 7,
        company_name: "sokhib_books",
        tax: 10,
        budget: 400_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 12_000
            },
            {
                title: "rent",
                total: 15_000
            },
        ]
    }
]

let expensestotal = []
let successfull = []
let unsuccessfull = []


let alltax = []
let tax_sum = 0
let max =[0,0]
let min = [  Infinity, Infinity ]



for (let item of jobs) {
    let totals = 0
    for (let item_2 of item.expensesPerYear) {
        totals += item_2.total
    }
    let str = Math.round(item.budget / 100 * item.tax / 12)
    item.tax_sum = str * 12
    totals += str
    totals = Math.round(totals / 12)

    let bnm = []
    let bnm2 = []
    bnm.push(item.company_name, totals, str)
    bnm2.push(item.company_name, str)
    expensestotal.push(bnm)
    alltax.push(bnm2)



    let m_budget = Math.round(item.budget / 12)
    let procent = Math.round(totals * 100 / m_budget)
    item.procent = procent

    let ostatoc = item.budget - totals
    item.ostatoc = ostatoc

    if (totals <= item.budget) {
        successfull.push(item.company_name)
    }
    else {
        unsuccessfull.push(item.company_name)
    }

    ////////////////////////////////

    // alltax += str///////////////////////////////////////////////////


tax_sum += str

}




alltax.forEach(item => {
    if (item[1]>max[1]) {
        max = item
    }
    else if (item[1]<min[1]) {
        min = item
    }
});

let sredtax = tax_sum/jobs.length


console.log(expensestotal);
console.log(jobs);
console.log(successfull);
console.log(unsuccessfull);


console.log(`HW////`);

console.log(`Общий налог ${tax_sum} $`);
console.log(`максимальный у ${max} $`);
console.log(`минимальный у ${min} $`);
console.log(`Средний налог ${sredtax} $`);
