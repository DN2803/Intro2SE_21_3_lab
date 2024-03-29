USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspAddOrUpdateMedicalHistory]    Script Date: 1/21/2024 3:40:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspAddOrUpdateMedicalHistory]
	@mabn CHAR(15),
    @ngaydieutri DATE,
	@mabacsi CHAR(10),  --đây đáng ra là @username của bác sỹ mới đúng, lỡ rồi nên sửa lại hơi mệt, thông cẻm nhe
	@trieuchung NVARCHAR(50),
	@chandoan NVARCHAR(50),
    @responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM BENHSU 
        WHERE MABN = @mabn AND NGAYDIEUTRI = @ngaydieutri
    )
    BEGIN
		DECLARE @mabacsyreal CHAR(10);

		-- Gán kết quả truy vấn cho biến
		SELECT @mabacsyreal = MABACSI
		FROM BACSI
		WHERE USERNAME = @mabacsi;


        INSERT INTO BENHSU(MABN, NGAYDIEUTRI, MABACSI, CHANDOAN, TRIEUCHUNG, TRANGTHAI, TRANGTHAITHANHTOAN)
        VALUES (@mabn, @ngaydieutri,@mabacsyreal, @trieuchung, @chandoan, N'Chưa', N'Chưa');
        
        SET @responseMessage='Inserting';
    END
    ELSE
    BEGIN
        UPDATE BENHSU
		SET TRIEUCHUNG = @trieuchung, CHANDOAN = @chandoan
		WHERE MABN = @mabn AND NGAYDIEUTRI = @ngaydieutri
		SET @responseMessage = 'Updating';
    END
END;