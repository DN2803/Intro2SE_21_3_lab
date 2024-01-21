CREATE OR ALTER PROCEDURE [dbo].[uspGetPrescription]
			@maBN VARCHAR(15),
			@ngayTao VARCHAR(20)
AS
BEGIN
	SELECT MABN, NGAYTAO, TENTHUOC, SOLUONG, GIABAN
	FROM dbo.CTDONTHUOC CTDT JOIN dbo.THUOC T ON CTDT.MATHUOC = T.MATHUOC
	WHERE MABN = @maBN AND CAST(NGAYTAO AS VARCHAR) = @ngayTao
END

EXEC dbo.uspGetPrescription @maBN = 'BN008',   -- varchar(15)
                            @ngayTao = '2024-01-21' -- varchar(20)