// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. 
// Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
class Statistics {
    constructor(ages){
        this.ages = ages;
    }
    count(){
        let c = 0;
         this.ages.forEach((age) => {
            c++
         });
         return c;
    }
    sum(){
        let s = 0;
        this.ages.forEach((age) => s += age);
        return s;
    }
    min(){
        let mn = this.ages.sort();
        return mn[0];
    }
    max(){
        let mx = this.ages.sort();
        return mx[mx.length - 1];
    }
    range(){
        return this.max() - this.min();
    }
    mean(){
        return Math.round(this.sum() / this.count());
    }
    median(){
        let mid = this.ages.sort();
        return mid[Math.floor(this.count()/2)];
    }
    mode(){
        const h = {};
        this.ages.forEach((age) => {
            if(h[age] === undefined) {
                h[age] = 0
            }
                h[age] += 1
        });
        let m = 0;
        let c = 0;
        Object.entries(h).forEach(([key, val]) => {
            if(val > c){
                c = val;
                m = key;
            }
        });
        return {mode : m, count: c};
    }
    var(){
        const arr = [];
        this.ages.forEach((age) => arr.push((age-(this.sum() / this.count()))**2));
        let s = 0;
        arr.forEach((a) => {
            s += a;
        });
        return Math.round((s/this.count())*10)/10;
    }
    std(){
        const arr = [];
        this.ages.forEach((age) => arr.push((age-this.mean())**2));
        let s = 0;
        arr.forEach((a) => {
            s += a;
        });
        return Math.round(Math.sqrt(s/this.count())*10) / 10;
    }
    freqDist(){
        const h = {};
        this.ages.forEach((age) => {
            if(h[age] === undefined) {
                h[age] = 0
            }
                h[age] += 1
        });
        const fd = [];
        Object.entries(h).forEach(([key, val]) => {
            fd.push([((val/this.count())*100).toFixed(1), key]);
            fd.sort((a, b) => {
                return a[0] == b[0] ? b[1] - a[1] : b[0] - a[0];
            });
        });
        return fd;
    }

}

const statistics = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ',statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ',statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ',statistics.freqDist());
