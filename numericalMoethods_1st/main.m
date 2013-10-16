classdef main
    methods (Static)
        function index = max_abs_in_column(column, from)
            s = size(column);
            max = 0;
            max_index = -9999;

            for i = from : s(1)
                if max < abs(column(i))
                    max = abs(column(i));
                    max_index = i;
                end
            end
            index = max_index;
        end

        function A = swap_rows(Arr, from, to)
            A = Arr;
            A([from to],:) = A([to from],:);    
        end

        function res = zeroing_row(main_row, row, index)
            res = main_row * (-row(index)/main_row(index)) + row;
        end

        % "AXB" A - must be a diagonal matrix
        function X = reverse_gauss(AXB)
            AXB_dimentions = size(AXB);
            B = AXB(:, AXB_dimentions(2));
            A = AXB(:, 1:AXB_dimentions(2)-1);
            A_dimentions = size(A);

             for i=  A_dimentions(1): -1 : 1
                X(i) = B(i)/A(i,i);
                A(:, i) = A(:, i) * X(i);
                for k = 1 : A_dimentions(2)
                   B(k) = B(k) - A(k, i);
                end
            end
        end

        function res = gauss(A, B)
            dimentions = size(A);
            AXB = [A B];
            for j = 1 : dimentions(2)
                max = main.max_abs_in_column(AXB(:,j), j);
                AXB = main.swap_rows(AXB, j, max); 
                main_row = j;

                for i = main_row +1 : dimentions(1)
                    AXB(i, :) = main.zeroing_row(AXB(main_row, :), AXB(i, :), j);  %%%%
                end
            end
            res = main.reverse_gauss(AXB);
        end

        function res = testStart()
            %res = main.gauss([2 1 -1; -3 -1 2; -2 1 2], [8; -11; -3]); % 3 2 -1
            %res = main.gauss([2 -1 0; -1 -1 4; 1 2 3], [4; -1; 10]); % 3 2 1
            %res = main.gauss([1 -2 1; 2 -5 -1; -7 0 1], [2; -1; -2]);
            %res = main.gauss([5 -5 -3 4; 1 -4 6 -4; -2 -5 4 -5; -3 -3 5 -5], [-11; -10; -12; 8]); % 3 2 1 
            %res = main.gauss([0.78 0.563; 0.913 0.659], [0.217; 0.254])
        end
    end
end
