classdef tridiagonal_matrix 
    methods (Static)
        function res = solveTridiagonal(A, B)
           AuxM = tridiagonal_matrix.getAuxiliaryMatrix(A, B);
           disp(AuxM);
            s = size(AuxM);
            X(s(1)) = AuxM(s(1), 1);
            for i = s(1)-1 : -1: 1
               X(i) = AuxM(i, 1) - AuxM(i, 2) * X(i+1);
            end
            res = X;
        end
        
        function res = testStart()
            %A = [1 4 0; 
            %     3 2 7; 
            %     0 1 3];
            %B = [17; 35; 9];
            % 5 3 2
            
            A = [0.2 1.2 0 0;  	
                 5.6 0.7 1 0;  
                 0  -0.5 1.1 0.07;  
                 0   0   1.9 1.3];
            B = [3.42; 10.62; -0.636; 4.92];
            %1.5 2.6 0.4 3.2
            
            %A = [1 4 0 0;  	
            %     2 1 4 0;  
            %     0 2 1 1;  
            %     0 0 2 3];
            %B = [17; 21; 12; 16];
            %5 3 2 4
            res = tridiagonal_matrix.solveTridiagonal(A, B);
        end

        function res = getAuxiliaryMatrix(A, B)
            AuxBetaAlpha(1,1) = B(1) / A(1,1);
            AuxBetaAlpha(1,2) = A(1,2) / A(1,1);
            s = size(A);
            for i = 2 : s(1) - 1 
                AuxBetaAlpha(i,1) = (B(i) - ( A(i,i-1) * AuxBetaAlpha(i-1,1))) / (A(i,i) - A(i, i-1) * AuxBetaAlpha(i-1, 2));
                AuxBetaAlpha(i,2) = A(i,i+1) / (A(i,i) - A(i,i-1) * AuxBetaAlpha(i-1,2)); 
            end
            AuxBetaAlpha(s(1),1) = (B(s(1)) - A(s(1), s(1)-1) * AuxBetaAlpha(s(1)-1,1)) / (A(s(1), s(1)) - A(s(1), s(1)-1) * AuxBetaAlpha(s(1)-1, 2));
            AuxBetaAlpha(s(1),2) = 0;
            res = AuxBetaAlpha;
        end
    end
end