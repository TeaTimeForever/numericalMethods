classdef cond_matrix 
    methods (Static)
        function res = condValue(A)
            B = inv(A);
            normA = cond_matrix.findNorm(A, 2);
            normB = cond_matrix.findNorm(B, 2);
            res = normA * normB;
        end

        function res = findNorm(A, power)
            pA = arrayfun(@(x) abs(x).^power, A);
            absMatrixSum = sum(sum(pA));
            res = nthroot(absMatrixSum, power);
            %res = svds(A, 1); like a matlab
        end
        
        function res = testStart()
            %res = cond_matrix.condValue([1 2 4; 5 1 2; 9 6 4]);
            %res = cond_matrix.condValue([2 -1 -1; 1 3 -2; 1 2 3]);
            res = cond_matrix.condValue([0.78 0.563; 0.913 0.659]);
        end
    end
end

