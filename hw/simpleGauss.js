function display_array(array) {
        for (k in array) {
                console.log(array[k]);
        }
}
function swap_rows(array, from, to) {
        var tmp = array[from];
        array[from] = array[to];
        array[to] = tmp;
        return array;
}
function zeroing_row(main_row, row, index) {
        var result = [];
        for (k in main_row) {
                result[k] = main_row[k] * (-row[index] / main_row[index]) + row[k];
        }
        return result;
}
function set_column(array, column, c_index) {
        for (k in column) {
                array[k][c_index] = column[k][0];
        }
        return array;
}
function get_columns(array, c_index, c_index_to) {
        if (c_index_to === undefined) {
                c_index_to = c_index;
        }
        var result = [];
        for (k in array) {
                result.push([])
                for ( var i = c_index; i <= c_index_to; i++) {
                        result[k].push(array[k][i]);
                }
        }
        return result;
}
function multiply_columns(vector_a, numb_b) {
        var result = [];
        for (k in vector_a) {
                result[k] = [ vector_a[k] * numb_b ];
        }
        return result;
}
function max_abs_in_column(column, from) {
        var size = column.length, max = 0, max_index = -9999;

        for ( var i = from; i < size; i++) {
                var tmp = Math.abs(column[i][0]);
                if (max < tmp) {
                        max = tmp;
                        max_index = i;
                }
        }
        return max_index;
}
function concat_matrixes(array_a, array_b) {
        var array_axb = array_a;
        for (k in array_b) {
                array_axb[k].push(array_b[k][0]);
        }
        return array_axb;
}
function gauss(array_a, array_b) {
        var size = array_a.length;
        var array_axb = concat_matrixes(array_a, array_b);
        var max, main_row;
        for ( var j = 0; j < size; j++) {
                max = max_abs_in_column(get_columns(array_axb, j), j);
                //array_axb = swap_rows(array_axb, j, max);
                main_row = j;

                for ( var i = main_row + 1; i < size; i++) {
                        array_axb[i] = zeroing_row(array_axb[main_row], array_axb[i], j);
                }
                console.log("AX = B, iteration: " + j)
                console.log(array_axb)
        }

        return reverse_gauss(array_axb);

}
function reverse_gauss(array_axb) {
        var size_axb = array_axb[0].length,
        array_a = get_columns(array_axb, 0, size_axb - 2),
        array_b = get_columns(array_axb, size_axb - 1),
        size_a = array_a.length,
        array_x = [],
        tmp;

        for ( var i = size_a - 1; i >= 0; i--) {
                array_x[i] = array_b[i][0] / array_a[i][i];
                tmp = multiply_columns(get_columns(array_a, i), array_x[i]);
                array_a = set_column(array_a, tmp, i);
                for ( var k = 0; k < size_a; k++) {
                        array_b[k][0] = array_b[k][0] - array_a[k][i];
                }
        }
        return array_x;
}
var test_matrix_AX = [[ 21, -3, 4 ], [ -3, 8, 1 ], [ 0, 6, -1 ]];
var test_matrix_B = [[ 3 ], [ 1 ], [ 0 ]];
display_array(gauss(test_matrix_AX, test_matrix_B))